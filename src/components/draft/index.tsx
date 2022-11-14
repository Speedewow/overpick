import * as React from 'react';
import { Radiant } from './radiant';
import { Dire } from './dire';
import { Control } from './control';
import styles from './styles.module.scss';
type Props = {
  onStart: () => void;
};
export const Draft = ({ onStart }: Props) => {
  return (
    <section className={styles.container}>
      <Radiant />
      <Control onStart={onStart} />
      <Dire />
    </section>
  );
};
