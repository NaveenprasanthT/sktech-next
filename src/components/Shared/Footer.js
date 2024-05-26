import React, { useState } from 'react';
import styles from '@/styles/Shared/footer.module.css';
import Image from 'next/image';
import SharedButton from './Button';
import Link from 'next/link';


function Footer() {
  const [email, setEmail] = useState();
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <div className={styles.logoContainer}>
            <Image
              src="/assets/Shared/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className={styles.footerLogo}
            />
          </div>
          <span>Want to keep up with the latest updates?</span>
        </div>
        <div className={styles.footerTopRight}>
          <ul className={styles.footerMenus}>
            <li>Home</li>
            <li>About us</li>
            <li>Products & Services</li>
            <li>Support</li>
            <li>Contact us</li>
          </ul>
          <div className={styles.newsLetterWrap}>
            <div className={styles.newLetterContainer}>
              <h5>Sign Up For Our Newsletter</h5>
              <div className={styles.newsLetterInput}>
                <input
                  value={email}
                  placeholder="Enter your email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SharedButton
                  label="Sign up"
                  buttonClick={() => { }}
                />
              </div>
            </div>
            <div className={styles.mediaTags}>
              <Image
                src="/assets/Footer/facebook.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              />
              <Image
                src="/assets/Footer/instagram.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              />
              <Image
                src="/assets/Footer/twitter.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              />
              <Image
                src="/assets/Footer/linkedin.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              />
              <Image
                src="/assets/Footer/youtube.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Link href="/privacypolicy" style={{textDecoration:"none"}}><h5>Privacy Policy</h5></Link>
        <Link href="/termsconditions" style={{textDecoration:"none"}}><h5>Terms & Conditions</h5></Link>
        <h5>COPYRIGHT Sktechnosys. ALL RIGHTS RESERVED</h5>
      </div>
    </div>
  );
}

export default Footer;
