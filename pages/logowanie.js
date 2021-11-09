import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from 'components/Layout';
import Header from 'components/Header';
import useRequest from 'hooks/useRequest';

import styles from 'styles/Login.module.css';
import { button } from 'styles/Layout.module.css';

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doRequest, errors] = useRequest({
    url: 'http://localhost:5000/api/users/signin',
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
        <h1 className={styles.loginHeading}>Zaloguj się</h1>
        <form className={styles.loginForm} onSubmit={submit}>
          <label className={styles.loginLabel}>
            <input 
              className={styles.loginInput} 
              type="email" 
              placeholder="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.loginLabel}>
            <input 
              className={styles.loginInput} 
              type="password" 
              placeholder="hasło" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>

        { errors }

          <button className={button} type="submit">Zaloguj</button>
        </form>
        <p className={styles.loginRegister}>Nie masz jeszcze konta? <Link href="/rejestracja"><a>Zarejestruj się</a></Link></p>
      </div>
    </Layout>
  )
};

export default Signin;