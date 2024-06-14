import React from 'react';
import styles from '@/styles/Shared/inputField.module.css';

function InputField(props) {
  const localFuncToChangeValue = (event) => {
    props?.onValueChange(event?.target?.name, event?.target?.value);
  };
  return (
    <div className={styles.inputWrap}>
      <input
        name={props?.name}
        type={props?.type || 'text'}
        value={props?.value}
        placeholder={props?.placeholder}
        className={styles.inputField}
        onChange={localFuncToChangeValue}
      />
    </div>
  );
}

export default InputField;
