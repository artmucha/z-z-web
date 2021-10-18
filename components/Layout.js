import Link from 'next/link';
import Head from 'next/head';
import { footer, container } from 'styles/Layout.module.css'

const Layout = ({ children, title = 'Zgubione.com', description = 'Opis będzie później' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
				<meta name="description" content={description} />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

			{children}
			
			<footer className={footer}>
        <div className={container}>
          Copyright © {new Date().getFullYear()} <Link href="https://zgubione.com"><a>Zgubione.com</a></Link> - Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </>
  )
}

export default Layout;