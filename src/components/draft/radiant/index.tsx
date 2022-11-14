import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../src/hooks';
import { radiantPickSelector } from '../../../selectors';
import { removeRadiantHero } from '../../../slices/pickSlice';
import { HeroInterface } from '../../../data/types';
import styles from '../styles.module.scss';

export const Radiant = () => {
  const pick = useAppSelector(radiantPickSelector);
  const dispatch = useAppDispatch();

  const handleClick = (hero: HeroInterface) => {
    dispatch(removeRadiantHero(hero));
  };

  const DisplayPick = () => {
    return pick.map((hero: HeroInterface, index: number) => {
      if (hero === null) {
        return <div className={styles.item} key={index} />;
      } else
        return (
          <img
            onClick={() => handleClick(hero)}
            className={styles.hero}
            src={hero.horizontal}
            key={index}
            draggable="false"
            alt={hero.name}
          />
        );
    });
  };

  return <div className={styles.pick}>{DisplayPick()}</div>;
};
