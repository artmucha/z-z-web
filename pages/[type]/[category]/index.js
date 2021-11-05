import { useState } from 'react';
import Link from 'next/link';

import Popup from 'components/Popup';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Card from 'components/Card';
import Filters from 'components/Filters';

import { container, grid } from 'styles/Layout.module.css'
import styles from 'styles/Page.module.css'

import AppsIcon from '../../../public/icons/apps.svg'

const Category = () => {
  const [popup, setPopup] = useState(false);

  return (
    <Layout>
      <Header />
      <main className={container}>
        <div className={styles.pageWrapper}>
          <h1 className={styles.pageTitle}>
            Zgubione dokumenty
            <button onClick={() => setPopup(!popup)}>
              <AppsIcon />
            </button>
          </h1>

          {/* start */}

          <div className={grid}>

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

          </div>
        {/* end */}

        </div>
      </main>
      <Popup popup={popup} setPopup={setPopup}>
        <Filters type="zgubione" />
      </Popup>
    </Layout>
  )
};

export default Category;