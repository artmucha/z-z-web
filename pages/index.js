import Link from 'next/link'

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
          <h1 className={styles.heroTitle}>Odzyskaj zagubione przedmioty i zwierzęta</h1>
          <Searcher />
        </div>
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
      </Header>
      <section>
        <h2 className={styles.homeHeading}>Najnowsze Zgubione</h2>
        <div>

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

      <section>
        <h2 className={styles.homeHeading}>Najnowsze Znalezione</h2>
        <div>
          

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

      <main>
      </main>
    </Layout>
  )
};

export default Home;
