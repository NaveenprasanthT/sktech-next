import React from 'react';
import styles from '@/styles/Home/productService.module.css';
import SectionHeader from '../Shared/SectionHeader';
import { ArrowIcon } from '../Shared/SvgIcon';
import Image from 'next/image';
import { useRouter } from 'next/router';

function ProductAndService() {
  const router = useRouter();
  const sliderImages = [
    "/assets/Home/productService.png",
    "/assets/Home/productService01.jpeg",
    "/assets/Home/productService02.jpeg",
    "/assets/Home/productService03.jpeg",
    "/assets/Home/productService04.jpeg",
  ];

  return (
    <div className={styles.productWrap}>
      <SectionHeader
        title="Product and Services"
        subTitle="Transforming Hospitality and Retail with Our Cutting-Edge Products and Services."
      // buttonLabel="Explore All"
      // buttonClick={handleClick}
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
              onClick={() => router.push('/product/pos-system?id=1')}
            >
              <span>View more</span>
              <span><ArrowIcon /></span>
            </button>
            <button
              onClick={() => router.push('/contactus')}
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
