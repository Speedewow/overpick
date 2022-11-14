import * as React from 'react';
import { Analysis } from './analysis';
import { Draft } from './draft/index';
import { Heroes } from './heroes/index';
import styles from './styles.module.scss';

export const App = () => {
  const [isPick, setIsPick] = React.useState(true);
  return (
    <div className={styles.main}>
      <Draft onStart={() => setIsPick(false)} />
      <Heroes />
      <Analysis isStart={isPick} />
    </div>
  );
};
