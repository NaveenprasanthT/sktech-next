import React from 'react';
import styles from '@/styles/Product/productBanner.module.css';
import SharedButton from '../Shared/Button';
import Image from 'next/image';

function ProductBanner(props) {
  const { bannerContent } = props;
  return (
    <div className={styles.productBannerWrap}>
      <div className={styles.productBannerDetails}>
        <div className={styles.productBannerContent}>
          <span>{bannerContent?.smallTitle}</span>
          <h1>{bannerContent?.title}</h1>
          <p>{bannerContent?.description}</p>
        </div>
        <Image
        src={bannerContent?.imagePath}
        alt="Product image"
        width={1000}
        height={1000}
        className={styles.productBannerImageMobile}
      />
        {bannerContent?.buttonLabel
          && (
            <SharedButton
              label={bannerContent?.buttonLabel}
              buttonClick={bannerContent?.buttonClick}
            />
          )}
      </div>
      <Image
        src={bannerContent?.imagePath}
        alt="Product image"
        width={1000}
        height={1000}
        className={styles.productBannerImage}
      />
    </div>
  );
}

export default ProductBanner;
