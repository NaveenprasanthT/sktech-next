import React, { useRef, useState } from 'react';
import styles from '@/styles/Home/productService.module.css';
import SectionHeader from '../Shared/SectionHeader';
import { ArrowIcon } from '../Shared/SvgIcon';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

function ProductAndService() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const settings = {
    ref: sliderRef,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    prevArrow: null,
    nextArrow: null,
    arrows: false,
    vertical: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const router = useRouter();
  const sliderImages = [
    "/assets/Home/img1.jpg",
    "/assets/Home/img2.jpg",
    "/assets/Home/img3.jpg",
    "/assets/Home/img5.jpg",
    "/assets/Home/img4.jpg",
  ];

  // Function to set the slide index to 1
  const handleMouseEnter = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);  // Use the slickGoTo method to change the slide
  };

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
            <h3
              style={{ color: currentSlide === 0 && '#FFFFFF', textDecoration: currentSlide === 0 && 'underline' }}
              onMouseEnter={() => handleMouseEnter(0)}
            >
              <Link href="/product/pos-system?id=1">
                Touch POS System
              </Link>
            </h3>
            <h3
              style={{ color: currentSlide === 1 && '#FFFFFF', textDecoration: currentSlide === 1 && 'underline' }}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              <Link href="/product/thermal-printers?id=1">
                Thermal Printers
              </Link>
            </h3>
            <h3
              style={{ color: currentSlide === 2 && '#FFFFFF', textDecoration: currentSlide === 2 && 'underline' }}
              onMouseEnter={() => handleMouseEnter(2)}
            >
              <Link href="/product/peripheral?id=1">
                POS Peripherals
              </Link>
            </h3>
            <h3
              style={{ color: currentSlide === 3 && '#FFFFFF', textDecoration: currentSlide === 3 && 'underline' }}
              onMouseEnter={() => handleMouseEnter(3)}
            >
              Desktop and servers
            </h3>
            <h3
              style={{ color: currentSlide === 4 && '#FFFFFF', textDecoration: currentSlide === 4 && 'underline' }}
              onMouseEnter={() => handleMouseEnter(4)}
            >
              Hospitality and Retail software
            </h3>
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
          <Slider
            {...settings}
            className={styles.imageWrap}
          >
            {sliderImages.map((image) => (
              <Image
                src={image}
                alt="sliderImage"
                width={1000}
                height={1000}
                className={styles.sliderImage}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.buttonWrapMobile}>
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
    </div>
  );
}

export default ProductAndService;
