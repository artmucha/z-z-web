import Link from 'next/link';
import { header } from 'styles/Layout.module.css'

const Header = ({children}) => {
  return (
    <header className={ header }>
      <Link href="/"><a>Zgubione.com</a></Link>
      { children }
    </header>
  )
}

export default Header;

