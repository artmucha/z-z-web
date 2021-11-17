import Image from 'next/image';

import Layout from 'components/Layout';
import Header from 'components/Header';
import { imageLoader } from 'utils/helpers';

import styles from 'styles/Layout.module.css';
import { single, singleSection, singleTitle, singleSubtitle, singleMeta } from 'styles/Single.module.css';

const Single = ({post}) => {

  return (
    <Layout>
      <Header />
      <main className={styles.container}>
        <article className={single}>
          <header className={singleSection}>
            <Image loader={imageLoader} src={post.image} width="100%" height="500px" quality={20} />
            <h1 className={singleTitle}>
              {post.title}
            </h1>
            <div>
              <p className={singleMeta}>Dodał: <span>Stefan</span></p>
              <p className={singleMeta}>Kategoria: <span>{post.category}</span></p>
              <p className={singleMeta}>Dodano: <span>{post.date}</span></p>
            </div>
          </header>

          <div className={singleSection}>
            <p>{post.description}</p>
          </div>

          {post.type === 'zgubione' ? 
            (<h2 className={singleSubtitle}>Znalazłeś? Skontaktuj się z szukającym</h2>) :
            (<h2 className={singleSubtitle}>Zgubiłeś? Skontaktuj się ze znalazcą</h2>)
          }

          <button className={styles.button}>Napisz</button>

        </article>
        
      </main>
    </Layout>
  )
};

export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:5000/api/posts/${params.slug}`);
  const post = await res.json();

  return {
    props: { post }
  }
};

export default Single;