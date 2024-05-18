import React from 'react';
import styles from '@/styles/Home/productService.module.css';
import SectionHeader from '../Shared/SectionHeader';
import { ArrowIcon } from '../Shared/SvgIcon';
import Image from 'next/image';

function ProductAndService() {
  const sliderImages = [
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
    "/assets/Home/aboutUs.png",
    "/assets/Home/productService.png",
  ];

  return (
    <div className={styles.productWrap}>
      <SectionHeader
        title="Product and Services"
        subTitle="Transforming Hospitality and Retail with Our Cutting-Edge Products and Services."
        buttonLabel="Explore All"
        buttonClick={() => console.log('Exploreeee')}
      />
      <div className={styles.productContentImage}>
        <div className={styles.productContainer}>
          <div className={styles.productContent}>
            <h2>Touch POS System</h2>
            <h3>Thermal Printers</h3>
            <h3>POS Peripherals</h3>
            <h3>Desktop and servers</h3>
            <h3>Hospitality and Retail software</h3>
            <div className={styles.emptyCircle} />
            <div className={styles.emptyCircle} />
          </div>
          <div className={styles.buttonWrap}>
            <button
              onClick={() => { }}
            >
              <span>View more</span>
              <span><ArrowIcon /></span>
            </button>
            <button
              onClick={() => { }}
            >
              <span>Get in Touch</span>
              <span><ArrowIcon /></span>
            </button>
          </div>
        </div>
        <div className={styles.imageWrap}>
          {sliderImages.map((image) => (
            <div className={styles.sliderImageWrap}>
              <Image
                src={image}
                alt="sliderImage"
                width={1000}
                height={1000}
                className={styles.sliderImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductAndService;
