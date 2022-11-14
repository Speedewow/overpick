import * as React from 'react';
import { pickSelector } from '../../../selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { clearState } from '../../../slices/pickSlice';
import { setStart } from '../../../slices/startSlice';
import { START, RESET } from './constants';
import styles from './styles.module.scss';

export const Control = () => {
  const pick = useAppSelector(pickSelector);
  const dispatch = useAppDispatch();

  const ResetClassName =
    pick.radiant.some(element => element !== null) || pick.dire.some(element => element !== null)
      ? styles.reset
      : styles.resetDisable;
  const StartClassName =
    pick.radiant.every(element => element !== null) && pick.dire.every(element => element !== null)
      ? styles.start
      : styles.startDisable;

  const handleReset = () => {
    dispatch(clearState());
  };
  const handleStart = () => {
    dispatch(setStart());
  };

  return (
    <div className={styles.container}>
      <button className={StartClassName} onClick={handleStart} aria-label={START} />
      <button className={ResetClassName} onClick={handleReset} aria-label={RESET}>
        {RESET}
      </button>
    </div>
  );
};
