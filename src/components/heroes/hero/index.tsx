import * as React from 'react';
import { HeroInterface, HeroStatus } from '../../../data/types';
import { Props } from './types';
import styles from './styles.module.scss';

export const Hero = ({ hero, onClick, status }: Props) => {
  const heroClassName = (status: HeroStatus) => {
    return status === HeroStatus.Active ? styles.hero : styles.heroDisable;
  };
  const heroOverlayClassName = (status: HeroStatus) => {
    if (status === HeroStatus.Disable) {
      return styles.overlayDisable;
    } else if (status === HeroStatus.Radiant) {
      return styles.overlayRadiant;
    } else if (status === HeroStatus.Dire) {
      return styles.overlayDire;
    } else return styles.overlayActive;
  };
  const handleClick = (hero: HeroInterface) => {
    if (status === HeroStatus.Active) {
      onClick(hero);
    } else return;
  };

  return (
    <li className={heroClassName(status)}>
      <div className={heroOverlayClassName(status)} />
      <a href={hero.link} className={styles.info} target="_blank" />
      <img
        src={hero.vertical}
        className={styles.image}
        onClick={() => handleClick(hero)}
        draggable="false"
      />
      <p className={styles.name}>{hero.name}</p>
    </li>
  );
};
