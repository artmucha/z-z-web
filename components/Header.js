import Link from 'next/link';

import { header, pageHeader, menu, containerFlex } from 'styles/Layout.module.css'

import UserIcon from '../public/icons/user.svg'

const Header = ({ children, homePage }) => {
  return (
    <header className={homePage ? header : pageHeader}>
      <nav className={containerFlex}>
        <Link href="/"><a>Zgubione.com</a></Link>
        <ul className={menu}>
          <li>
          <Link href="/logowanie"><a title="Zaloguj się"><UserIcon /></a></Link>
          </li>
        </ul>
      </nav>
      { children }
    </header>
  )
}

export default Header;

