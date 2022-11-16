import { stats } from '../../data/stats';
import { HeroInterface } from '../../data/types';
import { statsSum, bordersTransform } from './helpers';

export const useAnalysis = (radiant: HeroInterface[], dire: HeroInterface[]) => {
  const radiantHeroes: string[] = radiant.map(hero => hero != null && hero.name);
  const direHeroes: string[] = dire.map(hero => hero != null && hero.name);

  const radiantHeroesStats = radiantHeroes.map(name => stats.find(stat => stat.name === name));
  const direHeroesStats = direHeroes.map(name => stats.find(stat => stat.name === name));

  const radiantStats = statsSum(radiantHeroesStats);
  const direStats = statsSum(direHeroesStats);

  bordersTransform(radiantStats);
  bordersTransform(direStats);
  return stats;
};
