import * as React from 'react';
import { useAppSelector } from '../../../hooks';
import { radiantPickSelector, startSelector } from '../../../selectors';
import { HeroInterface } from '../../../data/types';
import styles from './styles.module.scss';

export const Radiant = () => {
  const start = useAppSelector(startSelector);
  const heroes = useAppSelector(radiantPickSelector);
  const containerClassName = start ? styles.container : styles.containerHidden;

  return (
    <ul className={containerClassName}>
      {start &&
        heroes.map((hero: HeroInterface, index: number) => (
          <li className={styles.hero} key={index}>
            <a href={hero.link} className={styles.name} target="_blank">
              {hero.name}
            </a>
            <img src={hero.horizontal} className={styles.image} alt={hero.name} />
          </li>
        ))}
    </ul>
  );
};
