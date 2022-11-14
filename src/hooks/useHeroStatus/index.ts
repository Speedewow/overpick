import { useEffect, useState } from 'react';
import { useAppSelector } from '../useAppSelector';
import { pickSelector } from '../../selectors';
import { HeroInterface, HeroStatus } from '../../data/types';

export const useHeroStatus = (hero: HeroInterface, value?: string) => {
  const [status, setStatus] = useState<HeroStatus>(HeroStatus.Active);
  const [search, setSearch] = useState<boolean>(false);
  const pick = useAppSelector(pickSelector);

  useEffect(() => {
    if (!value) {
      setSearch(false);
    } else if (
      hero.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toLowerCase()
        .includes(value.toLowerCase())
    ) {
      setSearch(false);
    } else if (!hero.name.toLowerCase().includes(value.toLowerCase())) {
      setSearch(true);
    }
  }, [value]);

  useEffect(() => {
    if (search) {
      setStatus(HeroStatus.Disable);
    } else if (pick.radiant.includes(hero)) {
      setStatus(HeroStatus.Radiant);
    } else if (pick.dire.includes(hero)) {
      setStatus(HeroStatus.Dire);
    } else setStatus(HeroStatus.Active);
  }, [search, pick, value]);

  return status;
};
