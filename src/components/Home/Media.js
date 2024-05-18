import React from 'react';
import styles from '@/styles/Home/media.module.css'
import SectionHeader from '../Shared/SectionHeader';

function Media() {
  return (
    <div className={styles.mediaWrap}>
      <SectionHeader
        title="Media"
        subTitle="Explore Diverse Media Collections: Ten Must-See Picks for Every Taste."
        buttonLabel="Explore All"
        buttonClick={() => console.log('Exploreeee')}
      />
      <div className={styles.mediaContainer}>
        <h2>Carousal...</h2>
      </div>
    </div>
  );
}

export default Media;
