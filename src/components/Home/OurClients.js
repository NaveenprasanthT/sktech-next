import React from 'react';
import styles from '@/styles/Home/ourClients.module.css';
import Image from 'next/image';
import SectionHeader from '../Shared/SectionHeader';

function OurClients() {
  const sliderImages = [
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
  ];

  return (
    <div className={styles.ourClientsWrap}>
      <SectionHeader
        title="Our Clients"
        description=<><span>Our valued clients</span> experience exceptional service, tailored solutions, and unwavering support for sustained success and growth.</>
      />
      <div className={styles.ourClientsContainer}>
        <div className={styles.ourClientsTop} />
        <div className={styles.ourClientsImages}>
          {sliderImages.map((each) => (
            <Image
              src={each}
              alt="image"
              width={1000}
              height={1000}
              className={styles.eachImage}
            />
          ))}
        </div>
        <div className={styles.ourClientsBottom} />
      </div>
    </div>
  );
}

export default OurClients;
