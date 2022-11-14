import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../src/hooks';
import { direPickSelector } from '../../../selectors';
import { removeDireHero } from '../../../reducers/reducer';
import { HeroInterface } from '../../../data/types';
import styles from '../styles.module.scss';

export const Dire = () => {
  const pick = useAppSelector(direPickSelector);
  const dispatch = useAppDispatch();

  const handleClick = (hero: HeroInterface) => {
    dispatch(removeDireHero(hero));
  };

  const DisplayPick = () => {
    return pick.map((hero: HeroInterface, index: number) => {
      if (hero === null) {
        return <div className={styles.item} key={index} />;
      } else
        return (
          <img
            key={index}
            onClick={() => handleClick(hero)}
            className={styles.hero}
            src={hero.horizontal}
            draggable="false"
          />
        );
    });
  };

  return <div className={styles.pick}>{DisplayPick()}</div>;
};
