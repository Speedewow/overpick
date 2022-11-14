import * as React from 'react';
import { PLACEHOLDER } from './constants';
import { Props } from './types';
import styles from './styles.module.scss';

export const Search = ({ value, onChange, onReset }: Props) => {
  return (
    <div className={styles.search}>
      <span className={styles.icon} />
      <input
        className={styles.input}
        placeholder={PLACEHOLDER}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onReset}
      />
    </div>
  );
};
