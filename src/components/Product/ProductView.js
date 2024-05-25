import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Product/productView.module.css';
import Image from 'next/image';

function ProductView(props) {
  const { productData } = props;
  const router = useRouter();
  const { id } = router.query;
  const [activeProduct, setActiveProduct] = useState({});
  const [productImageLargeView, setMainProductLargeView] = useState();
  const [activeProductId, setActiveProductId] = useState(0);

  const changeActiveProduct = (productId) => {
    setActiveProductId(productId);
  };

  useEffect(() => {
    if (id) {
      setActiveProductId(Number(id));
    } else {
      setActiveProductId(1);
    }
  }, [id]);

  useEffect(() => {
    const matchedProduct = productData?.productDetails?.find((product) => product?.id === activeProductId);
    setActiveProduct(matchedProduct);
    setMainProductLargeView(matchedProduct?.productImages?.[0]);
  }, [activeProductId]);

  return (
    <div className={styles.productWrap}>
      <div className={styles.buttonWrap}>
        {productData?.productTypes?.map((type) => (
          <button
            className={styles.productButton}
            style={{
              color: type.id === activeProductId
                ? '#FFFFFF'
                : '#101010',
              backgroundColor: type.id === activeProductId
                ? '#101010'
                : '#FFFFFF',
            }}
            onClick={() => changeActiveProduct(type?.id)}
          >
            {type?.label}
          </button>
        ))}
      </div>
      <div className={styles.productContentAndImage}>
        <div className={styles.productContentWrap}>
          <div className={styles.productContentHeader}>
            <h1>{activeProduct?.title}</h1>
            <p>{activeProduct?.description}</p>
          </div>
          <div className={styles.featuresWrap}>
            <h2>Features:</h2>
            <ul className={styles.featuresContainer}>
              {activeProduct?.features?.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.featureImagesWrap}>
          <div className={styles.mainImageWrap}>
            <Image
              src={productImageLargeView}
              alt='product'
              width={1000}
              height={1000}
              className={styles.mainImage}
            />
          </div>
          <div className={styles.productImages}>
            {activeProduct?.productImages?.map((productImage) => (
              <div className={styles.eachImageWrap}
                onClick={() => setMainProductLargeView(productImage)}
              >
                <Image
                  src={productImage}
                  alt='product'
                  width={1000}
                  height={1000}
                  className={styles.eachImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.brochureWrap}>
        <h1>Download our e-broucher</h1>
        <button className={styles.brochureButton}>
          Download
        </button>
        <Image
          src='/assets/Product/skyBg.png'
          alt='product'
          width={1000}
          height={1000}
          className={styles.brochureImage}
        />
      </div>
    </div>
  );
}

export default ProductView;
