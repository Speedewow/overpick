import * as React from 'react';
import { useAppDispatch } from '../../../hooks';
import { clearState } from '../../../slices/pickSlice';
import { setEnd } from '../../../slices/startSlice';
import { BACK, TEXT } from './constants';
import styles from './styles.module.scss';

export const Stats = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(clearState());
    dispatch(setEnd());
  };

  return (
    <div className={styles.stats}>
      <h2 className={styles.text}>{TEXT}</h2>
      <button className={styles.button} onClick={handleBack} aria-label={BACK}>
        {BACK}
      </button>
    </div>
  );
};
