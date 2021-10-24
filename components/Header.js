import Link from 'next/link';
import { useState } from 'react';

import Popup from './Popup';

import { header, pageHeader, menu, containerFlex } from 'styles/Layout.module.css'

import AppsIcon from '../public/icons/apps.svg'
import UserIcon from '../public/icons/user.svg'

const Header = ({ children, homePage }) => {
  const [appsPopup, setAppsPopup] = useState(false);

  return (
    <>
      <header className={homePage ? header : pageHeader}>
        <nav className={containerFlex}>
          <Link href="/"><a>Zgubione.com</a></Link>
          <ul className={menu}>
            <li>
              <AppsIcon onClick={() => setAppsPopup(!appsPopup)} />
            </li>
            <li>
            <Link href="/logowanie"><a title="Zaloguj się"><UserIcon /></a></Link>
            </li>
          </ul>
        </nav>
        { children }
      </header>
      <Popup popup={appsPopup} setPopup={setAppsPopup} />
    </>
  )
}

export default Header;

