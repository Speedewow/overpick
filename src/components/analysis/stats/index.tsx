import * as React from 'react';
import cx from 'classnames';
import { startSelector } from '../../../selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { clearState } from '../../../slices/pickSlice';
import { setEnd } from '../../../slices/startSlice';
import { NEW, TITLE } from './constants';
import { Stat } from './stat';
import styles from './styles.module.scss';

export const Stats = () => {
  const dispatch = useAppDispatch();
  const start = useAppSelector(startSelector);

  const titleClassName = cx(styles.title, !start && styles.titleHidden);
  const buttonClassName = cx(styles.button, !start && styles.buttonHidden);

  const handleBack = () => {
    dispatch(clearState());
    dispatch(setEnd());
  };

  return (
    <div className={styles.stats}>
      <h2 className={titleClassName}>{TITLE}</h2>
      {start && (
        <div className={styles.container}>
          <Stat name="RESULT" condition={80} />
          <Stat name="WIN BEFORE 35 MIN" condition={20} />
          <Stat name="WIN AFTER 35 MIN" condition={15} />
          <Stat name="TEAM FIGHT POTENTIAL" condition={55} />
          <Stat name="SOLO KILLS POTENTIAL" condition={75} />
          <Stat name="SAVE POTENTIAL" condition={65} />
          <Stat name="MOBILITY" condition={80} />
          <Stat name="META" condition={90} />
          <Stat name="MOBILITY" condition={95} />
        </div>
      )}
      <button className={buttonClassName} onClick={handleBack} aria-label={NEW}>
        {NEW}
      </button>
    </div>
  );
};
