import * as React from 'react';
import cx from 'classnames';
import { pickSelector } from '../../../selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { clearState } from '../../../slices/pickSlice';
import { setStart } from '../../../slices/startSlice';
import { START, RESET } from './constants';
import styles from './styles.module.scss';

export const Control = () => {
  const pick = useAppSelector(pickSelector);
  const dispatch = useAppDispatch();

  const startCondition =
    pick.radiant.every(element => element !== null) && pick.dire.every(element => element !== null);
  const resetCondition =
    pick.radiant.some(element => element !== null) || pick.dire.some(element => element !== null);

  const ResetClassName = resetCondition ? styles.reset : styles.resetDisable;
  const StartDisableClassName = cx(styles.disable, startCondition && styles.disableHidden);
  const StartClassName = cx(styles.start, startCondition && styles.startVisible);

  const handleReset = () => {
    dispatch(clearState());
  };
  const handleStart = () => {
    dispatch(setStart());
  };

  return (
    <div className={styles.container}>
      <div className={styles.replace}>
        <button className={StartDisableClassName} aria-label={START} />
        <button className={StartClassName} onClick={handleStart} aria-label={START} />
      </div>
      <button className={ResetClassName} onClick={handleReset} aria-label={RESET}>
        {RESET}
      </button>
    </div>
  );
};
