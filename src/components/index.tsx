import * as React from 'react';
import { Analysis } from './analysis';
import { Draft } from './draft/index';
import { Heroes } from './heroes/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.main}>
      <Draft />
      <Heroes />
      <Analysis />
    </div>
  );
};
