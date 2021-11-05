import { useState, useCallback, useRef } from 'react';

import Card from 'components/Card';

import { categories} from 'constans/filters';

import { button } from 'styles/Layout.module.css'
import styles from 'styles/Filters.module.css';

const Filters = ({ type }) => {
  const searchRef = useRef(null);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);

  const debounce = useCallback((callback, wait) => {
    let timeout;
  
    return (...args) => {
      const next = () => {
        timeout = null;
        callback(...args);
      }; 
      clearTimeout(timeout);
      timeout = setTimeout(next, wait);
    };
  }, []);

  const handleSearch = useCallback((event) => {
    const location = event.target.value;
    setActive(true);
    setLocation(location);
    if(location.length >=2) {
      debounce(async() => {
        const res = await fetch(`http://localhost:5000/api/filters?search=${location}`);
        const data = await res.json();
        setResults(data);
      }, 1000)();
    } else {
      setActive(false);
      setResults([]);
    }
  }, []);

  const handleClick = (event, city) => {
    if(searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
    } else if (searchRef.current && searchRef.current.contains(event.target)) {
      setLocation(city.Name);
      setActive(false);
    }
  };

  return (
    <form className={styles.filtersForm} action={`/${type}/${category}`} method="GET">
      <fieldset>
        <legend className={styles.filtersTitle}>Kategorie</legend>
        <div className={styles.filtersGroup}>
        { categories.map(category => 
          <label key={category.value} className={styles.filtersLabel}>
            <input type="radio" value={category.slug} className={styles.filtersInput} onChange={() => setCategory(category.slug)} />
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
        <legend className={styles.filtersTitle}>Lokalizacja</legend>
        <div className={styles.filtersGroup}>
          <div ref={searchRef} className={styles.filtersSearch}>
              <input 
                className={styles.filtersSelect}
                placeholder="Wyszukaj miasto" 
                type="text"  
                name="miasto"
                value={location}
                onChange={handleSearch}
              />
              {active && results.length > 0 && (
                <ul className={styles.filtersResults}>
                  {results.map(({Id, Name, Province, Latitude, Longitude}) => <li key={Id} onClick={(event) => handleClick(event, {Id, Name, Province, Latitude, Longitude})}>{Name} - woj. {Province}</li>)}
                </ul>
              )}
            </div>

        </div>

      </fieldset>
      {type === 'zgubione' ? (
        <fieldset>
          <legend className={styles.filtersTitle}>Znaleźne</legend>
          <label className={styles.filtersCheckbox}>
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

