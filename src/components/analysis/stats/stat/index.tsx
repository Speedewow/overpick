import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const Stat = ({ name, condition }: Props) => {
  const barWidth = {
    width: `${condition}%`,
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <div className={styles.bar}>
        <div style={barWidth} className={styles.o}>
          <span className={styles.progress} />
        </div>
      </div>
      <div className={styles.rate}>
        <p className={styles.info}>{condition}</p>
        <p className={styles.info}>{100 - condition}</p>
      </div>
    </div>
  );
};
