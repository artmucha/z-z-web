import { useState, useCallback, useRef } from 'react';

import Card from 'components/Card';

import { categories} from 'constans/filters';
import { debounce } from 'utils/helpers';

import { button } from 'styles/Layout.module.css'
import styles from 'styles/Form.module.css';

const Filters = ({ type }) => {
  const searchRef = useRef(null);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);

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
      setActive(false);
    }
  };

  return (
    <form className={styles.form} action={`/${type}/${category}`} method="GET">
      <fieldset>
        <legend className={styles.formTitle}>Kategorie</legend>
        <div className={styles.formGroup}>
        { categories.map(category => 
          <label key={category.value} className={styles.formLabel}>
            <input type="radio" value={category.slug} className={styles.formInputSpecial} onChange={() => setCategory(category.slug)} />
            <Card 
              type="icon"
              image={require(`/public/icons/${category.value}.svg`)}
              width="70px"
              height="60px"
              title={category.name}
            />
          </label>
        )}
        </div>
      </fieldset>
      <fieldset>
        <legend className={styles.formTitle}>Lokalizacja</legend>
        <div className={styles.formGroup}>
          <div ref={searchRef} className={styles.formInputText}>
              <input 
                className={styles.formSelect}
                placeholder="Wyszukaj miasto" 
                type="text"  
                name="miasto"
                value={location}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {active && results.length > 0 && (
                <ul className={styles.formResults}>
                  {results.map(({Id, Name, Province}) => <li key={Id} onClick={(event) => handleClick(event, Name)}>{Name} - woj. {Province}</li>)}                
                </ul>
              )}
            </div>

        </div>

      </fieldset>
      {type === 'zgubione' ? (
        <fieldset>
          <legend className={styles.formTitle}>Znaleźne</legend>
          <label className={styles.formCheckbox}>
            <input type="checkbox" name="znalezne" />
            Pokaż tylko ogłoszenia ze znaleźnym
          </label>
        </fieldset>
      ) : null }
      <button className={button} type="submit" style={{ marginTop: '30px' }}>Filtruj</button>
    </form>
  )
};

export default Filters;

