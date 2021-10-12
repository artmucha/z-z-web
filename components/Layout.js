import Link from 'next/link';
import Head from 'next/head';
import styles from 'styles/Layout.module.css'

const Layout = ({ children, title = 'Zgubione-Znalezione', description = 'Opis będzie później' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
				<meta name="description" content={description} />
      </Head>
			<header className={styles.header}>
			<Link href="/">Zgubione-Znalezione</Link>
			</header>

			{children}
			
			<footer className={styles.footer}>
				Copyright © {new Date().getFullYear()} <Link href="https://zgubione.com">Zgubione-Znalezione</Link> - Wszystkie prawa zastrzeżone.
			</footer>
    </>
  )
}

export default Layout;