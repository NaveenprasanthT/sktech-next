import React,{useState,useRef} from 'react';
import styles from '@/styles/Home/media.module.css'
import SectionHeader from '../Shared/SectionHeader';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import Image from 'next/image';

function Media() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: styles.ReviewContainer,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const list = [
    {
      id: 0,
      img: '/assets/Home/aboutUs.png',
    },
    {
      id: 1,
      img: '/assets/Home/productService.png',
    },
    {
      id: 2,
      img: '/assets/Home/aboutUs.png',
    },
    {
      id: 3,
      img: '/assets/Home/productService.png',
    },
    {
      id: 4,
      img: '/assets/Home/aboutUs.png'
    },
    {
      id: 5,
      img: '/assets/Home/productService.png',
    }
  ];

  return (
    <div className={styles.mediaWrap}>
      <SectionHeader
        title="Media"
        subTitle="Explore Diverse Media Collections: Ten Must-See Picks for Every Taste."
        buttonLabel="Explore All"
        buttonClick={() => console.log('Exploreeee')}
      />
      <div className={styles.mediaContainer}>
      <div className={styles.ArrowContainer}><span onClick={handlePrev}><IoIosArrowDropleftCircle /></span></div>
        <Slider {...settings} className={styles.ReviewContainer} ref={sliderRef}>
          {list.map((show) => (
            <div className={show.id === slideIndex ? styles.CenterActive : styles.Center}>
              <Image src={show.img} width={1000} height={1000} className={styles.reviewImageLeft} />
            </div>
          ))}
        </Slider>
        <div id='faq' className={styles.ArrowContainer}><span onClick={handleNext}><IoIosArrowDroprightCircle /></span></div>
      </div>
    </div>
  );
}

export default Media;
