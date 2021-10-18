import Link from 'next/link';
import { header, menu, containerFlex } from 'styles/Layout.module.css'

import AppsIcon from '../public/icons/apps.svg'
import UserIcon from '../public/icons/user.svg'

const Header = ({children}) => {
  return (
    <header className={header}>
      <nav className={containerFlex}>
        <Link href="/"><a>Zgubione.com</a></Link>
        <ul className={menu}>
          <li>
            <AppsIcon />
          </li>
          <li>
            <UserIcon />
          </li>
        </ul>
      </nav>
      { children }
    </header>
  )
}

export default Header;

