import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '@/styles/Home/homeBanner.module.css';

function HomeBanner() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: styles.homeBannerContainer,
    centerMode: false,
    prevArrow: null,
    nextArrow: null,
  };

  const sliderImages = [
    "/assets/Home/banner01.webp",
    "/assets/Home/banner02.webp",
    "/assets/Home/banner03.webp",
    "/assets/Home/banner04.webp",
  ];

  return (
    <div className={styles.homeBannerWrap}>
      <Slider {...settings} className={styles.homeBannerContainer}>
        {sliderImages.map((image) => (
          <div className={styles.homeBannerImageWrap}>
            <Image
              src={image}
              alt="sliderImage"
              width={1000}
              height={1000}
              className={styles.homeBannerImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;
