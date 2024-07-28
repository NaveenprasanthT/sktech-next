import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/News/NewsContent.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

function NewsContent() {
  const router = useRouter();
  const newsContentData = [
    {
      imageUrl: '/assets/News/press-release.jpg',
      title: <>S K Technosys Makes a Splash at World Hospitality Expo 2024 in Bengaluru - <span> Learn More </span></>,
      onClickUrl: '/news/PressRelease/WorldHospitalityExpo',
    },
  ];
  return (
    <div className={styles.newsContentWrap}>
      {newsContentData?.map((content) => (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={() => router.push(content.onClickUrl)}
          className={styles.eachNewsContent}
        >
          <Image
            src={content?.imageUrl}
            width={1000}
            height={1000}
            className={styles.eachContentImage}
          />
          <div className={styles.eachContentTitle}>
            <h2>{content?.title}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default NewsContent;
