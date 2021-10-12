import Link from 'next/link';

import Layout from 'components/Layout';
import { container } from 'styles/Layout.module.css'
import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <main className={container}>
        <div className={styles.home}>
          <Link href="/zgubione">
            <div className={styles.homeItem}>
              Zgubione
            </div>
          </Link>
          <Link href="/znalezione">
            <div className={styles.homeItem}>
              Znalezione
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  )
};

export default Home;
