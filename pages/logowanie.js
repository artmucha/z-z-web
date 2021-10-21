import Link from 'next/link';

import Layout from 'components/Layout';
import Header from 'components/Header';

import styles from 'styles/Login.module.css';

const Signin = () => {
  return (
    <Layout>
      <Header />
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeading}>Zaloguj się</h1>
        <form className={styles.loginForm} action="/" method="POST">
          <label className={styles.loginLabel}>
            <input className={styles.loginInput} type="email" placeholder="email" />
          </label>
          <label className={styles.loginLabel}>
            <input className={styles.loginInput} type="password" placeholder="hasło" />
          </label>
          <button type="submit">Zaloguj</button>
        </form>
        <p className={styles.loginRegister}>Nie masz jeszcze konta? <Link href="/rejestracja"><a>Zarejestruj się</a></Link></p>
      </div>
    </Layout>
  )
};

export default Signin;