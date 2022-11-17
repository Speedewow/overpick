export interface HeroInterface {
  name: string;
  link: string;
  vertical: string;
  horizontal: string;
}
export interface StatsInterface {
  [key: string]: number;
}

export interface HeroStatsInterface {
  [key: string]: StatsInterface;
}

export type PickType = {
  radiant: HeroInterface[];
  dire: HeroInterface[];
};

export type StateType = {
  pick: PickType;
  start: boolean;
};

export enum HeroStatus {
  Disable = 0,
  Active = 1,
  Radiant = 2,
  Dire = 3,
}

// export interface StatsInterface {
//   name?: string;
//   earlyGame: number;
//   middleGame: number;
//   lateGame: number;
//   laning: number;
//   push: number;
//   roshan: number;
//   fight: number;
//   vision: number;
//   initiation: number;
//   soloControl: number;
//   bkbControl: number;
//   massControl: number;
//   magicDamage: number;
//   physicalDamage: number;
//   burstDamage: number;
//   heal: number;
//   save: number;
//   buff: number;
//   durability: number;
//   escape: number;
//   mobility: number;
//   meta: number;
// }
