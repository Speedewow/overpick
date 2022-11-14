import * as React from 'react';
import { useAppSelector } from '../../hooks';
import { startSelector } from '../../selectors';
import { Radiant } from './radiant';
import { Stats } from './stats';
import { Dire } from './dire';
import styles from './styles.module.scss';

export const Analysis = () => {
  const start = useAppSelector(startSelector);
  const CN = start ? styles.analysisActive : styles.analysis;

  return (
    <div className={CN}>
      <Radiant />
      <Stats />
      <Dire />
    </div>
  );
};
