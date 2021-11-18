import Link from 'next/link';

import { header, pageHeader, headerIcons, containerFlex } from 'styles/Layout.module.css';

import UserIcon from '../public/icons/user.svg';
import MessegeIcon from '../public/icons/messege.svg';

const Header = ({ children, homePage }) => {
  return (
    <header className={homePage ? header : pageHeader}>
      <nav className={containerFlex}>
        <Link href="/"><a>Zgubione.com</a></Link>
        <div className={headerIcons}>
          <Link href="/profil/wiadomosci"><a title="Wiadomości"><MessegeIcon /></a></Link>
          <Link href="/logowanie"><a title="Zaloguj się"><UserIcon /></a></Link>
        </div>
      </nav>
      { children }
    </header>
  )
}

export default Header;

