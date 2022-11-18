import * as React from 'react';
import cx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../src/hooks';
import { direPickSelector } from '../../../selectors';
import { removeDireHero } from '../../../slices/pickSlice';
import { HeroInterface } from '../../../data/types';
import styles from '../styles.module.scss';

export const Dire = () => {
  const pick = useAppSelector(direPickSelector);
  const dispatch = useAppDispatch();

  const heroClassName = (hero: HeroInterface) => cx(styles.hero, hero != null && styles.heroActive);

  const handleClick = (hero: HeroInterface) => {
    dispatch(removeDireHero(hero));
  };

  const DisplayPick = () => {
    return pick.map((hero: HeroInterface, index: number) => (
      <div className={styles.item} key={index}>
        <div className={heroClassName(hero)}>
          {hero != null && (
            <img
              onClick={() => handleClick(hero)}
              className={styles.image}
              src={hero.horizontal}
              key={index}
              draggable="false"
              alt={hero.name}
            />
          )}
        </div>
        <div className={styles.overlay} />
      </div>
    ));
  };

  return <div className={styles.pick}>{DisplayPick()}</div>;
};
