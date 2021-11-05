import Link from 'next/link'

import Layout from 'components/Layout';
import Header from 'components/Header';
import Searcher from 'components/Searcher';
import Card from 'components/Card';

import { categories } from 'constans/filters';

import styles from 'styles/Home.module.css'
import { container, grid } from 'styles/Layout.module.css'

const Home = (props) => {
  return (
    <Layout homePage currentUser={props.currentUser}>
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

          {/* start */}

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/post.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/kot.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/post.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/kot.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          {/* end */}

        </div>
      </section>

      <section className={container}>
        <h2 className={styles.homeHeading}>
        <Link href={`/znalezione`}>
          <a title="Zobacz najnowsze znalezione przedmioty">Najnowsze Znalezione</a>
        </Link>
        </h2>
        <div className={grid}>
          

          {/* start */}

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/post.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/kot.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/post.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          <Link 
              href={`/znalezione/`}
            ><a>
              <Card 
                image="/public/kot.jpeg"
                width="100%"
                height="200px"
                title="Znaleziono motor, opis jest długi, ale niepoterzbny"
              />
              </a>
          </Link>

          {/* end */}

          </div>
      </section>
      </main>
    </Layout>
  )
};

export default Home;
