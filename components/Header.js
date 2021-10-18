import Link from 'next/link';
import { header, container } from 'styles/Layout.module.css'

const Header = ({children}) => {
  return (
    <header className={header}>
      <nav className={container}>
        <Link href="/"><a>Zgubione.com</a></Link>
      </nav>
      { children }
    </header>
  )
}

export default Header;

