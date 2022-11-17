import { HeroInterface, StatsInterface } from '../../data/types';
import { stats, keys, maxAvailableStats } from '../../data/stats';

export const transformToStats = (radiant: HeroInterface[], dire: HeroInterface[]) => {
  const pickStats: StatsInterface = {};
  const radiantTransformed = radiant.map(hero => hero.name).map((name: string) => stats[name]);
  const direTransformed = dire.map(hero => hero.name).map((name: string) => stats[name]);
  const statToPercent = (stat: number, key: string) => (100 * stat) / maxAvailableStats[key];

  const statsSum = (arr: StatsInterface[]) => {
    const result: StatsInterface = {};
    keys.map((key: string) => {
      arr.map((element: StatsInterface) => {
        if (result[key]) {
          result[key] += element[key];
        } else result[key] = element[key];
      });
    });
    return result;
  };

  keys.map((key: string) => {
    pickStats[key] =
      statToPercent(statsSum(radiantTransformed)[key], key) -
      statToPercent(statsSum(direTransformed)[key], key);
  });

  return pickStats;
};
