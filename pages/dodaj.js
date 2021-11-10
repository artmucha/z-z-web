import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Header from 'components/Header';

import { categories } from 'constans/filters';
import { debounce } from 'utils/helpers';
import useRequest from 'hooks/useRequest';

import SpinnerIcon from '../public/icons/spinner.svg';
import CheckIcon from '../public/icons/check.svg';
import XIcon from '../public/icons/cross.svg';

import { container, button, pending, error, success } from 'styles/Layout.module.css';
import styles from 'styles/Form.module.css';

const NewPost = () => {
  const searchRef = useRef(null);
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);

  const [data, setData] = useState({
    type: 'zgubione',
    title: '',
    category: 'bizuteria',
    location: '',
    price: '',
    description: '',
    slug: '',
    image: '',
    date: '',
  });

  const [doRequest, errors, status] = useRequest({
    url: 'http://localhost:5000/api/posts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    onSuccess: () =>  {
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }
  });

  const makeSlug = (text) => {
    let title = text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    let date = new Date().getTime();
    return `${title}-${date}`;
  };

  const getCities = debounce(async (location) => {
    const res = await fetch(`http://localhost:5000/api/filters?search=${location}`);
    const locations = await res.json();
    setResults(locations);
  }, 1000);

  const handleSearch = useCallback((location) => {
    setActive(true);
    setLocation(location);
    if(location.length > 2) {
      getCities(location);
    } else {
      setActive(false);
      setResults([]);
    }
  }, []);

  const handleClick = (event, city) => {
    if(searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
    } else if (searchRef.current && searchRef.current.contains(event.target)) {
      setLocation(city);
      setData({...data, location: city})
      setActive(false);
    }
  };

  const handleChange = (event) => {
    if(event.target.name === 'image') {
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        setData({ ...data, image: reader.result });
      };

      reader.readAsDataURL(file);

    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { title } = data;
    const slug = makeSlug(title);
    const date = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(new Date());

    const post = { ...data, slug, date };

    try {
      await doRequest(post);
    } catch(error) {
      console.log(error)
    }
  };

  const buttonStatus = () => {
    if (status === 'pending') return <SpinnerIcon />
    else if (status === 'success') return <CheckIcon />
    else if (status === 'error') return <XIcon />
    else return 'Dodaj'
  };

  const buttonStyle = () => {
    if (status === 'pending') return pending
    if (status === 'success') return success
    if (status === 'error') return error
  };

  return (
    <Layout>
      <Header />
      <main className={container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formHeading}>Dodaj ogłoszenie</h1>

          <form className={`${styles.form} ${styles.formWrapper}`} action={`/`} method="POST">
            <fieldset>
              <legend className={styles.formTitle}>Rodzaj ogłoszenia*</legend>
              <select name="type" className={`${styles.formInputText} ${styles.formSelect}`} onChange={handleChange} required>
                <option value="zgubione">Zgubiłem</option>
                <option value="znalezione">Znalazłem</option>
              </select>
            </fieldset>
            <fieldset>
              <legend className={styles.formTitle}>Tytuł*</legend>
                <input 
                  type="text" 
                  name="title" 
                  className={`${styles.formInputText} ${styles.formSelect}`} 
                  placeholder="Podaj tytuł" 
                  onChange={handleChange}
                  required
                />
            </fieldset>
            <fieldset>
              <legend className={styles.formTitle}>Kategoria*</legend>
              <select name="category" className={`${styles.formInputText} ${styles.formSelect}`} onChange={handleChange} required >
              { categories.map(category => 
                <option key={category.value} value={category.slug}>{category.name}</option>
              )}
              </select>
            </fieldset>
            <fieldset>
              <legend className={styles.formTitle}>Lokalizacja*</legend>
                <div ref={searchRef} className={styles.formInputText}>
                  <input 
                    className={styles.formSelect}
                    placeholder="Wpisz conajmniej trzy litery" 
                    type="text"  
                    name="location"
                    value={location}
                    onChange={(e) => handleSearch(e.target.value)}
                    required
                  />
                  {active && results.length > 0 && (
                    <ul className={styles.formResults}>
                      {results.map(({Id, Name, Province}) => <li key={Id} onClick={(event) => handleClick(event, Name)}>{Name} - woj. {Province}</li>)}
                    </ul>
                  )}
                </div>
            </fieldset>
            <fieldset>
              <legend className={styles.formTitle}>Opis*</legend>
              <textarea 
                name="description" 
                className={styles.formTextArea} 
                value={data.description} 
                placeholder="Opisz przedmiot" 
                onChange={handleChange} 
                required 
              />
            </fieldset>

            <fieldset>
              <legend className={styles.formTitle}>Zdjęcie</legend>
              <input 
                type="file" 
                name="image" 
                accept="image/*"
                placeholder="Dodaj zdjęcie" 
                onChange={handleChange}
              />
            </fieldset>

            { data.type === 'zgubione' && (
              <fieldset>
                <legend className={styles.formTitle}>Znaleźne</legend>
                <input 
                  type="text" 
                  name="price" 
                  className={`${styles.formInputText} ${styles.formSelect}`} 
                  placeholder="Podaj kwotę w zł" 
                  onChange={handleChange}
                />
              </fieldset>
            ) }

            { errors }

            <button 
              className={`${button} ${buttonStyle()}`} 
              type="submit" 
              style={{ marginTop: '30px' }} 
              onClick={(event) => handleSubmit(event)}>
                { buttonStatus() }
              </button>
          </form>
        </div>
      </main>
    </Layout>
  )
};

export default NewPost;