import React from 'react';
import styles from '@/styles/Home/aboutUs.module.css';
import Image from 'next/image';
import SharedButton from '../Shared/Button';
import { useRouter } from 'next/router';

function AboutUs() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/aboutus');
  };

  return (
    <div className={styles.aboutUsWrap}>
      <Image
        src="/assets/Home/aboutUs.png"
        alt="aboutImage"
        width={1000}
        height={1000}
        className={styles.aboutUsImage}
      />
      <div className={styles.aboutUsContainer}>
        <h1>About us</h1>
        <h4 className={styles.backgroundText}>
          "Welcome to S K TECHNOSYS"
        </h4>
        <Image
          src="/assets/Home/aboutUs.png"
          alt="aboutImage"
          width={1000}
          height={1000}
          className={styles.aboutUsImageMobile}
        />
        <p>
          S K Technosys is an industry expertise in hospitality and retail segment in providing end to end IT solutions and more with best in class technology associates.
        </p>
        <p>
          We are dedicated to deliver innovative, ideal, reliable and affordable effective solutions for small, medium and large scale enterprises.
        </p>
        <p>
          We provide a breadth of services from planning, supply and implementation of IT activities to our customers in a single window.
        </p>
        <SharedButton
          label="Read More"
          buttonClick={handleClick}
        />
      </div>
    </div>
  );
}

export default AboutUs;
