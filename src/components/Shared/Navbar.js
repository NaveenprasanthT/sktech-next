import React from 'react';
import styles from '@/styles/Shared/navbar.module.css';
import Image from 'next/image';
import { MessageIcon } from './SvgIcon';
import Link from 'next/link';

function Navbar() {
  return (
    <>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarLeft}>
          <Image
            src='/assets/Shared/logo.png'
            alt='logo'
            className={styles.logoImage}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.navbarRight}>
          <ul>
            <li>Home</li>
            <li>Products & Services</li>
            <Link href="/aboutus" style={{textDecoration:"none"}}><li>About us</li></Link>
            <li>Support</li>
            <li>Contact us <span><MessageIcon /></span> </li>
          </ul>
        </div>
      </div>
      <div className={styles.emptyDiv} />
    </>
  );
}

export default Navbar;