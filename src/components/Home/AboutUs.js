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
          S K Technosys is a leading provider of end-to-end IT solutions for the hospitality and retail industries in India. Our team of highly-skilled IT professionals is dedicated to delivering innovative, ideal, reliable, and affordable IT solutions for small, medium, and large-scale enterprises.
        </p>
        <p>
          We offer a comprehensive range of IT services, from planning and supplying IT equipment to implementing and managing IT systems for our clients. We are a one-stop shop for all your IT needs, allowing you to focus on running your business.
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
