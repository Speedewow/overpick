import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
};
