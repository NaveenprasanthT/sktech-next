import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import styles from '@/styles/Home/homeBanner.module.css';

function HomeBanner() {
  const router = useRouter();

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
    pauseOnHover: false,
  };

  const sliderImages = [
    {
      image: "/assets/Home/banner01.webp",
      title: 'Powerhouse Performance for your Business.',
      button: 'Contact Us',
      buttonFunction: () => router.push('/contactus'),
    },
    // "/assets/Home/banner02.webp",
    {
      image: "/assets/Home/banner03.webp",
      title: 'Download Our Intelligent Store Guide: Learn How Technology Transforms Retail.',
      button: 'Learn More ',
      buttonFunction: () => router.push('/support'),
    },
    // "/assets/Home/banner04.webp",
  ];

  return (
    <div className={styles.homeBannerWrap}>
      <Slider {...settings} className={styles.homeBannerContainer}>
        {sliderImages.map((eachSlider) => (
          <div className={styles.homeBannerWrap}>
            <Image
              src={eachSlider.image}
              alt="sliderImage"
              width={1000}
              height={1000}
              className={styles.homeBannerImage}
            />
            <div className={styles.overlay} />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.75 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              // viewport={{ once: true }}
              className={styles.contentWrap}
            >
              <h1>{eachSlider?.title}</h1>
              <button
                onClick={eachSlider.buttonFunction}
              >
                {eachSlider?.button}
              </button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;
