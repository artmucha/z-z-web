import Header from 'components/Header';
import Layout from 'components/Layout';
import Searcher from 'components/Searcher';
import Card from 'components/Card';

import { categories } from 'constans/filters';

import styles from 'styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <Header>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Odzyskaj zgubione przedmioty</h1>
          <Searcher />
        </div>
        <div className={styles.categories}>
          {categories.map(category => 
            <Card key={category.value}>{category.name}</Card>
          )}
        </div>
      </Header>
      <main>
      </main>
    </Layout>
  )
};

export default Home;
