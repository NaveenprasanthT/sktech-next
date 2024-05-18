import React from 'react';
import styles from '@/styles/Shared/sectionHeader.module.css';
import SharedButton from './Button';

function SectionHeader(props) {
  return (
    <div className={styles.sectionHeaderWrap}>
      <div className={styles.sectionContent}>
        <h1>{props?.title}</h1>
        {props?.subTitle && <h6>{props?.subTitle}</h6>}
      </div>
      {props?.buttonLabel
      && (
        <SharedButton 
          label={props?.buttonLabel}
          buttonClick={props?.buttonClick}
        />
      )}
      {props?.description && <h2>{props?.description}</h2>}
    </div>
  );
}

export default SectionHeader;
