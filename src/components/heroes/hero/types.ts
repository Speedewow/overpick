import { HeroInterface, HeroStatus } from 'src/data/types';

export type Props = {
  hero: any;
  onClick: (hero: HeroInterface) => void;
  status: HeroStatus;
};
