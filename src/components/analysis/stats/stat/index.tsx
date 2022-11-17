import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const Stat = ({ name, condition }: Props) => {
  const barWidth = {
    width: `${50 + condition}%`,
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <div className={styles.bar}>
        <span style={barWidth}></span>
      </div>
      <div className={styles.rate}>
        <p className={styles.info}>{(50 + condition).toFixed(2) + '%'}</p>
        <p className={styles.info}>{(50 - condition).toFixed(2) + '%'}</p>
      </div>
    </div>
  );
};
