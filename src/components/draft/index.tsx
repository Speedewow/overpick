import * as React from 'react';
import { Radiant } from './radiant';
import { Dire } from './dire';
import { Control } from './control';
import styles from './styles.module.scss';

export const Draft = () => {
  return (
    <section className={styles.container}>
      <Radiant />
      <Control />
      <Dire />
    </section>
  );
};
