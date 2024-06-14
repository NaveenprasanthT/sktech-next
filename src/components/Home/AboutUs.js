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
          S K Technosys is an Industry Expertise in Hospitality and Retail segment in providing end to end IT Solutions and more with best in class Technology Associates.
        </p>
        <p>
          We are dedicated to deliver Innovative, Ideal, Reliable and affordable effective solutions for Small, Medium and Large Scale Enterprises.
        </p>
        <p>
          We Provide a Breadth of Services from Planning, Supply and Implementation of IT activities to our customers in a single window.
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
