import React from 'react';
import styles from '@/styles/Home/ourClients.module.css';
import Image from 'next/image';
import SectionHeader from '../Shared/SectionHeader';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: styles.homeBannerContainer,
    centerMode: false,
    prevArrow: null,
    nextArrow: null,
    arrows: true,
    responsive: [
      {
        breakpoint: 800, // screens larger than 1024px
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };
  const sliderImages = [
    "/assets/Home/logo1.jfif",
    "/assets/Home/logo2.png",
    "/assets/Home/logo3.jfif",
    "/assets/Home/logo4.jfif",
    "/assets/Home/logo5.png",
  ];

  return (
    <div className={styles.ourClientsWrap}>
      <SectionHeader
        title="Our Clients"
        description=<><span>Our valued clients</span> experience exceptional service, tailored solutions, and unwavering support for sustained success and growth.</>
      />
      <div className={styles.ourClientsContainer}>
        <div className={styles.ourClientsTop} />
        <Slider {...settings} className={styles.ourClientsImages}>
          {sliderImages.map((each) => (
            <div className={styles.eachImageContainer}>
              <Image
                src={each}
                alt="image"
                width={1000}
                height={1000}
                className={styles.eachImage}
              />
            </div>
          ))}
        </Slider>
        <div className={styles.ourClientsBottom} />
      </div>
    </div>
  );
}

export default OurClients;
