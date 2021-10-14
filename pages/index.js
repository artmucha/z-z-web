import Header from 'components/Header';
import Layout from 'components/Layout';
import Searcher from 'components/Searcher';

import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <Header>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Odzyskaj zagubione przedmioty</h1>
          <Searcher />
        </div>
      </Header>
      <main>
        <div>
        
        </div>
      </main>
    </Layout>
  )
};

export default Home;
