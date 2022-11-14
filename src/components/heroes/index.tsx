import * as React from 'react';
import { useAppDispatch, useHeroStatus, useSearch } from '../../hooks';
import { addHero } from '../../slices/pickSlice';
import { Search } from './search-input/';
import { Hero } from './hero/';
import { HeroInterface } from '../../data/types';
import { STRENGTH, AGILITY, INTELLIGENCE } from './constants';
import { agility, intelligence, strength } from '../../data/data';
import styles from './styles.module.scss';

export const Heroes = () => {
  const { value, handleChange, handleReset } = useSearch();
  const dispatch = useAppDispatch();

  const handleClick = (hero: HeroInterface) => {
    dispatch(addHero(hero));
  };

  return (
    <section className={styles.container}>
      <Search value={value} onChange={handleChange} onReset={handleReset} />
      <ul className={styles.heroes}>
        <h2 className={styles.strength}>{STRENGTH}</h2>
        {strength.map((hero, index) => (
          <Hero key={index} hero={hero} onClick={handleClick} status={useHeroStatus(hero, value)} />
        ))}
      </ul>
      <ul className={styles.heroes}>
        <h2 className={styles.agility}>{AGILITY}</h2>
        {agility.map((hero, index) => (
          <Hero key={index} hero={hero} onClick={handleClick} status={useHeroStatus(hero, value)} />
        ))}
      </ul>
      <ul className={styles.heroes}>
        <h2 className={styles.intelligence}>{INTELLIGENCE}</h2>
        {intelligence.map((hero, index) => (
          <Hero key={index} hero={hero} onClick={handleClick} status={useHeroStatus(hero, value)} />
        ))}
      </ul>
    </section>
  );
};
