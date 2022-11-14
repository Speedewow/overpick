import { useEffect, useState } from 'react';
import { useAppSelector } from '../useAppSelector';
import { pickSelector } from '../../selectors';
import { HeroInterface, HeroStatus } from '../../data/types';

export const useHeroStatus = (hero: HeroInterface, value?: string) => {
  const [status, setStatus] = useState<HeroStatus>(HeroStatus.Active);
  const pick = useAppSelector(pickSelector);
  const search =
    value &&
    (hero.name.toLowerCase().includes(value.toLowerCase()) ||
      hero.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toLowerCase()
        .includes(value.toLowerCase()));

  useEffect(() => {
    if (search) {
      setStatus(HeroStatus.Disable);
    } else if (pick.radiant.includes(hero)) {
      setStatus(HeroStatus.Radiant);
    } else if (pick.dire.includes(hero)) {
      setStatus(HeroStatus.Dire);
    } else setStatus(HeroStatus.Active);
  }, [value, pick]);

  return status;
};
