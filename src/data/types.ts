export interface HeroInterface {
  name: string;
  link: string;
  vertical: any;
  horizontal: any;
}

export type PickType = {
  radiant: HeroInterface[];
  dire: HeroInterface[];
};

export type StateType = {
  pick: PickType;
};

export enum HeroStatus {
  Disable = 0,
  Active = 1,
  Radiant = 2,
  Dire = 3,
}
