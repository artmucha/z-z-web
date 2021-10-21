import { useState } from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';

import styles from 'styles/Login.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regulations, setRegulations] = useState(false);

  const submit = async e => {
    e.preventDefault();

    const resp = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    });
  };

  return (
    <Layout>
      <Header />
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeading}>Zarejestruj się</h1>
        <form className={styles.loginForm} onSubmit={submit}>
          <label className={styles.loginLabel}>
            <input 
              className={styles.loginInput} 
              type="email" 
              placeholder="email" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.loginLabel}>
            <input 
              className={styles.loginInput} 
              type="password" 
              placeholder="hasło" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input 
              className={styles.loginCheckbox}
              type="checkbox" 
              required  
              value={regulations}
              checked={regulations === true}
              onChange={e => setRegulations(!regulations)}
            />
            Zapoznałem się z Regulaminem i Polityką prywatności oraz akceptuję ich zapisy.
          </label>
          <button type="submit" style={{marginTop: '15px'}}>Zarejestruj</button>
        </form>
      </div>
    </Layout>
  )
};

export default Signup;