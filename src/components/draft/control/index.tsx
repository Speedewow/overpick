import * as React from 'react';
import { pickSelector } from '../../../selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { clearState } from '../../../reducers/reducer';
import styles from './styles.module.scss';
type Props = {
  onStart: () => void;
};
export const Control = ({ onStart }: Props) => {
  const pick = useAppSelector(pickSelector);
  const dispatch = useAppDispatch();

  const ResetClassName =
    pick.radiant.some(element => element !== null) || pick.dire.some(element => element !== null)
      ? styles.reset
      : styles.resetDisable;
  const StartClassName =
    !pick.radiant.every(element => element !== null) &&
    !pick.dire.every(element => element !== null)
      ? styles.start
      : styles.startDisable;

  const handleReset = () => {
    dispatch(clearState());
  };

  return (
    <div className={styles.container}>
      <button className={StartClassName} onClick={onStart} />
      <button className={ResetClassName} onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};
