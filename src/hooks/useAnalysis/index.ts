import { HeroInterface } from '../../data/types';
import { transformToStats } from './helpers';

export const useAnalysis = (radiant: HeroInterface[], dire: HeroInterface[]) => {
  const pickStats = transformToStats(radiant, dire);
  return pickStats;
};
