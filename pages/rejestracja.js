import { useState } from 'react';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Header from 'components/Header';
import useRequest from 'hooks/useRequest';

import styles from 'styles/Login.module.css';
import { button } from 'styles/Layout.module.css';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regulations, setRegulations] = useState(false);
  const [doRequest, errors] = useRequest({
    url: 'http://localhost:5000/api/users/signup',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    onSuccess: () => router.push('/')
  });

  const submit = async e => {
    e.preventDefault();
    await doRequest({email, password});
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

          { errors }

          <button className={button} type="submit" style={{marginTop: '15px'}}>Zarejestruj</button>
        </form>
      </div>
    </Layout>
  )
};

export default Signup;