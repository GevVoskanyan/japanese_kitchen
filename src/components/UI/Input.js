import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => (
  <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <input ref={ref} {...props.input} />
  </div>
));

export default Input;
