import React from 'react';
import styles from '@/styles/Shared/button.module.css';

function SharedButton(props) {
  return (
    <button
      onClick={props?.buttonClick}
      className={styles.sharedButton}
      disabled={props?.disable}
    >
      {props?.label}
    </button>
  );
}

export default SharedButton;
