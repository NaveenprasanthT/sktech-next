import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

import styles from '@/styles/Home/media.module.css';
import SectionHeader from '../Shared/SectionHeader';
import { MediaLeftArrow, MediaRightArrow } from '../Shared/SvgIcon';

export default function SwiperCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUpdateMargin = (sliderIndex) => {
    let finalMargin = 0;
    if ((activeIndex - 1 === sliderIndex) || (activeIndex + 1 === sliderIndex)) {
      finalMargin = 50;
    } else if ((activeIndex - 2 === sliderIndex) || (activeIndex + 2 === sliderIndex)) {
      finalMargin = 100;
    } else if ((activeIndex - 3 === sliderIndex) || (activeIndex + 3 === sliderIndex)) {
      finalMargin = 150;
    } else if ((activeIndex - 4 === sliderIndex) || (activeIndex + 4 === sliderIndex)) {
      finalMargin = 200;
    }
    return finalMargin;
  };

  const opts = {
    height: '100%',
    width: '100%',
  };

  return (
    <div className={styles.mediaContainerWrap}>
      <SectionHeader
        title="Media"
      />
      <Swiper
        initialSlide={1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          prevEl: '#swiper-button-prev',
          nextEl: '#swiper-button-next',
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => {
          // Make sure to initialize navigation after swiper instance is available
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <div
            className={styles.sliderImage}
            style={{ marginTop: `${handleUpdateMargin(0)}px` }}
          >
            <YouTube
              videoId={getYouTubeID("https://youtu.be/j5e_sI_53Jg?feature=shared")}
              opts={opts}
              className="youtube-video"
              // onReady={(e) => e.target.pauseVideo()}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderImage}
            style={{ marginTop: `${handleUpdateMargin(1)}px` }}
          >
            <YouTube
              videoId={getYouTubeID("https://youtu.be/z9ks2WERiF0?feature=shared")}
              opts={opts}
              className="youtube-video"
              onReady={(e) => e.target.pauseVideo()}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderImage}
            style={{ marginTop: `${handleUpdateMargin(2)}px` }}
          >
            <YouTube
              videoId={getYouTubeID("https://youtu.be/BTKju09b5EI?feature=shared")}
              opts={opts}
              className="youtube-video"
              onReady={(e) => e.target.pauseVideo()}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderImage}
            style={{ marginTop: `${handleUpdateMargin(3)}px` }}
          >
            <YouTube
              videoId={getYouTubeID(" https://youtu.be/KARlle3W7DE?si=uf1AdjtfrfKG0eWl ")}
              opts={opts}
              className="youtube-video"
              onReady={(e) => e.target.pauseVideo()}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className={styles.swiperButtonPrev}
        id="swiper-button-prev"
      >
        <MediaLeftArrow />
      </div>
      <div
        className={styles.swiperButtonNext}
        id="swiper-button-next"
      >
        <MediaRightArrow />
      </div>
    </div>
  );
}
