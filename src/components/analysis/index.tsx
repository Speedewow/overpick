import * as React from 'react';
import styles from './styles.module.scss';
import { Props } from './types';

export const Analysis = ({ isStart }: Props) => {
  const CN = !isStart ? styles.analysisActive : styles.analysis;

  return (
    <div className={CN}>
      <div className={styles.pick}></div>
      <div className={styles.stats}></div>
      <div className={styles.pick}></div>
    </div>
  );
};
