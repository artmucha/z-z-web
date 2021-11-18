import Link from 'next/link';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Pagination from 'components/Pagination';

import styles from 'styles/Layout.module.css';
import { messeges, messegesHeader, messegesItem } from 'styles/Profile.module.css';

const Messeges = () => {

  return (
    <Layout>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Wiadomości</h1>

        <ul className={messeges}>
          <li className={messegesHeader}>
            <p>Użytkownik</p>
            <p>Ogłoszenie</p>
          </li>
          <li>
            <Link href={`/profil/wiadomosci/id`}>
              <a title="Tytuł ogłoszenia" className={messegesItem}>
                <p><span>Robert</span></p>
                <p>
                  <strong>Zgubiłem rower w krakowie</strong>
                  <span>Hej, chyba znalazłem Twój rower</span>
                </p>
                <p>
                  <span>12.07.2021</span>
                </p>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/profil/wiadomosci/id`}>
              <a title="Tytuł ogłoszenia" className={messegesItem}>
                <p><span>Robert</span></p>
                <p>
                  <strong>Zgubiłem rower w krakowie</strong>
                  <span>Hej, chyba znalazłem Twój rower</span>
                </p>
                <p>
                  <span>12.07.2021</span>
                </p>
              </a>
            </Link>
          </li>
        </ul>

        <Pagination
          currentPage={1}
          totalPages={1}
        />
        
      </main>
    </Layout>
  )
};

export default Messeges;