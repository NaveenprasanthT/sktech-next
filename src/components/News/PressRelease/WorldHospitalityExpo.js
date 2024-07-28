import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/News/PressRelease/WorldHospitalityExpo.module.css';
import Link from 'next/link';
import Image from 'next/image';

function WorldHospitalityExpoComponent() {
  return (
    <div className={styles.newsComponentWrap}>
      <video
        src="/assets/News/videoplayback.mp4"
        controls={false}
        muted
        autoPlay
        loop
      />
      <div className={styles.newsComponentContentWrap}>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          S K Technosys, a leading product-based company based in Bengaluru, India, successfully participated in the recent World of Hospitality Expo business events for HoReCa (Hotel, Restaurant, and Cafe) professionals. The event, held at the Tripura Vasini Palace Grounds in Bengaluru from June 13th to 15th, 2024, proved to be a valuable platform for S K Technosys to connect with industry leaders and potential customers.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.newsComponentImageWrap}
        >
          <Image
            src="/assets/News/expo01.jpg"
            className={styles.newsComponentImage}
            width={1000}
            height={1000}
            loading="eager"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          At World of Hospitality, we showcased our innovative SK-POS Product, which generated significant interest from restaurant owners and managers looking to improve their efficiency," said CafeVishala. "Best SK-Pos Product Ever No Complaint No Issue”.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.newsComponentImageWrap}
        >
          <Image
            src="/assets/News/expo02.jpg"
            className={styles.newsComponentImage}
            width={1000}
            height={1000}
            loading="eager"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          The event was a resounding success, attracting a large audience of B2B and B2C customers.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.newsComponentImageWrap}
        >
          <Image
            src="/assets/News/expo03.jpg"
            className={styles.newsComponentImage}
            width={1000}
            height={1000}
            loading="eager"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          S K Technosys had the opportunity to showcase its products and services to a diverse range of industry professionals from renowned establishments like @fivestar_india, @therameshwaramcafe, @cafevishala, @artofliving, @vidyarthibhavan, and @petpooja_pos.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.newsComponentImageWrap}
        >
          <Image
            src="/assets/News/expo04.jpg"
            className={styles.newsComponentImage}
            width={1000}
            height={1000}
            loading="eager"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          We are thrilled with the positive response we received at the World of Hospitality event.The event provided us with a fantastic opportunity to connect with key decision-makers and potential customers in the HoReCa sector. We were particularly excited to meet and network with representatives from such well-established brands.”
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          To learn more about S K Technosys and how our products can help your hospitality business thrive, visit our website <Link href="https://sktechnosys.in/" target='_blank'>
            https://sktechnosys.in/
          </Link> or contact our sales team today."
        </motion.h3>
        <div className={styles.metaTagLogos}>
          <motion.h3
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Follow us on for more information:-
          </motion.h3>
          <motion.div
            className={styles.mediaTags}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Link href="https://www.facebook.com/sktechnosys" target="_blank" style={{ textDecoration: "none" }}>
              <Image
                src="/assets/Footer/facebook.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              /></Link>
            <Link href="https://www.instagram.com/sktechnosys/" target="_blank" style={{ textDecoration: "none" }}>
              <Image
                src="/assets/Footer/instagram.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              /></Link>
            <Link href="https://www.linkedin.com/company/sk-technosys/" target="_blank" style={{ textDecoration: "none" }}><Image
              src="/assets/Footer/linkedin.png"
              alt="icon"
              width={200}
              height={200}
              className={styles.mediaLogo}
            /></Link>
            <Link href="https://www.youtube.com/@sktechnosys" target="_blank" style={{ textDecoration: "none" }}>
              <Image
                src="/assets/Footer/youtube.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              /></Link>
            <Link href="https://g.page/r/CfZlVE1BAXXKEBM/review" target="_blank">
              <Image
                src="/assets/Footer/google.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              /></Link>
            <a href="https://api.whatsapp.com/send?phone=+918105625375" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/Footer/whatsapp.png"
                alt="icon"
                width={200}
                height={200}
                className={styles.mediaLogo}
              /></a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WorldHospitalityExpoComponent;
