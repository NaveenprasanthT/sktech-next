import React from 'react';
import styles from '@/styles/Product/productFAQ.module.css';
import { PointArrow } from '../Shared/SvgIcon';
import Image from 'next/image';

function ProductFAQ (props) {
  const { productFAQ } = props;
  return (
    <div className={styles.faqWrap}>
      <div className={styles.faqLeft}>
        <h1>{productFAQ?.question}</h1>
        <p>{productFAQ?.answer}</p>
        <div className={styles.pointWrap}>
          {productFAQ?.points?.map((point) => (
            <div className={styles.pointContainer}>
              <span><PointArrow /></span>
              <h6>{point}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.faqRight}>
        <div className={styles.faqImageWrap}>
          {productFAQ?.faqImages?.map((each) => (
            <div className={styles.faqImageContainer}>
              <Image 
                src={each}
                alt="faqImage"
                width={1000}
                height={1000}
                className={styles.faqImage}
              />
            </div>
          ))}
        </div>
        <p>{productFAQ?.description}</p>
      </div>
    </div>
  );
}

export default ProductFAQ;
