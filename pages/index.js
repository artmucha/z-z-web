import Link from 'next/link'

import Layout from 'components/Layout';
import Header from 'components/Header';
import Searcher from 'components/Searcher';
import Card from 'components/Card';

import { categories } from 'constans/filters';

import AddIcon from '../public/icons/add.svg';

import styles from 'styles/Home.module.css';
import { container, grid, buttonIcon, buttonFloat } from 'styles/Layout.module.css';

const Home = ({data}) => {
  return (
    <Layout homePage>
      <Header homePage>
        <div className={container} style={{ maxWidth: '1700px' }}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Odzyskaj zagubione przedmioty i zwierzęta</h1>
            <Searcher />
          </div>
        </div>
        <div className={container}>
          <div className={styles.categories}>
            {categories.map(category => (
              <Link 
                href={`/znalezione/${category.slug}`}
                key={category.value}
              ><a>
                <Card 
                  type="icon"
                  image={require(`/public/icons/${category.value}.svg`)}
                  width="70px"
                  height="60px"
                  title={category.name}
                />
                </a>
              </Link>
              )
            )}
          </div>
        </div>
      </Header>
      <main>
      <section className={container}>
        <h2 className={styles.homeHeading}>
        <Link href={`/zgubione`}>
          <a title="Zobacz najnowsze zagubione przedmioty">
            Najnowsze Zgubione
          </a>
        </Link>
        </h2>
        <div className={grid}>

        {data.lost.posts.slice(0,4).map(post => (
          <Link key={post._id} href={`/${post.slug}`}>
            <a>
              <Card 
                image={post.image}
                width="100%"
                height="200px"
                title={post.title}
                category={post.category}
                date={post.date}
              />
            </a>
          </Link>
        ))}

        </div>
      </section>

      <section className={container}>
        <h2 className={styles.homeHeading}>
        <Link href={`/znalezione`}>
          <a title="Zobacz najnowsze znalezione przedmioty">Najnowsze Znalezione</a>
        </Link>
        </h2>
        <div className={grid}>

        {data.found.posts.slice(0,4).map(post => (
          <Link key={post._id} href={`/${post.slug}`}>
            <a>
              <Card 
                image={post.image}
                width="100%"
                height="200px"
                title={post.title}
                category={post.category}
                date={post.date}
              />
            </a>
          </Link>
        ))}

          </div>
      </section>
      <Link href={'/dodaj'}>
        <a className={`${buttonIcon} ${buttonFloat}`}>
          <AddIcon />
        </a>
      </Link>
      </main>
    </Layout>
  )
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/posts?type=zgubione`);
  const lost = await res.json();

  const resp = await fetch(`http://localhost:5000/api/posts?type=znalezione`);
  const found = await resp.json();

  return {
    props: { data: {lost, found} }
  }
};

export default Home;
