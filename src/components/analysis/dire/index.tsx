import * as React from 'react';
import cx from 'classnames';
import { useAppSelector } from '../../../hooks';
import { direPickSelector, startSelector } from '../../../selectors';
import { HeroInterface } from '../../../data/types';
import styles from './styles.module.scss';

export const Dire = () => {
  const start = useAppSelector(startSelector);
  const heroes = useAppSelector(direPickSelector);
  const containerClassName = cx(
    styles.container,
    start ? styles.containerVisible : styles.containerHidden
  );

  return (
    <ul className={containerClassName}>
      {start &&
        heroes.map((hero: HeroInterface, index: number) => (
          <li className={styles.hero} key={index}>
            <img src={hero.horizontal} className={styles.image} alt={hero.name} />
            <a href={hero.link} className={styles.name} target="_blank">
              {hero.name}
            </a>
          </li>
        ))}
    </ul>
  );
};
