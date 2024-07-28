import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/News/NewsBanner.module.css';
import Link from 'next/link';

function NewsBanner() {
  return (
    <div className={styles.newsBannerWrap}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.newsBannerContent}
      >
        <div className={styles.contentWithNavigation}>
          <span>
            <Link href="/">
              Home
            </Link>
          </span>
          <span>-</span>
          <span>Latest News</span>
        </div>
        <div className={styles.newsBannerTitleDesc}>
          <h1>Latest News</h1>
          <h2>Stay in the loop by keeping up with Posiflex’s
            latest news and events!</h2>
        </div>
      </motion.div>
    </div>
  );
}

export default NewsBanner;
