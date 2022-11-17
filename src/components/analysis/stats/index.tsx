import * as React from 'react';
import { pickSelector, startSelector } from '../../../selectors';
import { useAnalysis, useAppDispatch, useAppSelector } from '../../../hooks';
import { clearState } from '../../../slices/pickSlice';
import { setEnd } from '../../../slices/startSlice';
import { NEW, TITLE } from './constants';
import { Stat } from './stat';
import styles from './styles.module.scss';

export const Stats = () => {
  const pick = useAppSelector(pickSelector);
  const dispatch = useAppDispatch();
  const start = useAppSelector(startSelector);
  const analysis = start && useAnalysis(pick.radiant, pick.dire);

  const handleBack = () => {
    dispatch(clearState());
    dispatch(setEnd());
  };

  const PageDisplay = () => {
    return Object.keys(analysis).map((key: string) => (
      <Stat name={key} condition={analysis[key]} key={key} />
    ));
  };

  return (
    <div className={styles.stats}>
      <h2 className={styles.title}>{TITLE}</h2>
      <div className={styles.container}>{PageDisplay()}</div>
      <button className={styles.button} onClick={handleBack} aria-label={NEW}>
        {NEW}
      </button>
    </div>
  );
};
