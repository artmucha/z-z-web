import Link from 'next/link';

import Layout from 'components/Layout';
import Header from 'components/Header';

import styles from 'styles/Login.module.css';

const Signup = () => {
  return (
    <Layout>
      <Header />
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeading}>Zarejestruj się</h1>
        <form className={styles.loginForm} action="/" method="POST">
          <label className={styles.loginLabel}>
            <input className={styles.loginInput} type="email" placeholder="email" required />
          </label>
          <label className={styles.loginLabel}>
            <input className={styles.loginInput} type="password" placeholder="hasło" required />
          </label>
          <label>
            <input type="checkbox" required className={styles.loginCheckbox} />
            Zapoznałem się z Regulaminem i Polityką prywatności oraz akceptuję ich zapisy.
          </label>
          <button type="submit" style={{marginTop: '15px'}}>Zarejestruj</button>
        </form>
      </div>
    </Layout>
  )
};

export default Signup;