import { useState } from 'react';
import Link from 'next/link';

import Popup from 'components/Popup';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Card from 'components/Card';
import Filters from 'components/Filters';

import { container, grid, buttonIcon, buttonFloat } from 'styles/Layout.module.css';
import styles from 'styles/Page.module.css';

import AppsIcon from '../../public/icons/apps.svg';
import AddIcon from '../../public/icons/add.svg';

const Type = ({posts}) => {
  const [popup, setPopup] = useState(false);

  return (
    <Layout>
      <Header />
      <main className={container}>
        <div className={styles.pageWrapper}>
          <h1 className={styles.pageTitle}>
            Zgubione
            <button onClick={() => setPopup(!popup)}>
              <AppsIcon />
            </button>
          </h1>
          <div className={grid}>

            {posts.map(post => (
              <Link href={`/${post.slug}`}>
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
        </div>
      </main>
      <Popup popup={popup} setPopup={setPopup}>
        <Filters type="zgubione" />
      </Popup>
      <Link href={'/dodaj'}>
        <a className={`${buttonIcon} ${buttonFloat}`}>
          <AddIcon />
        </a>
      </Link>
    </Layout>
  )
};

export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:5000/api/posts?type=${params.type}`);
  const posts = await res.json();

  return {
    props: { posts }
  }
};

export default Type;