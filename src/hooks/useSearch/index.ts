import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
  const [value, setValue] = useState<string>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value.replace(/[^a-z]/gi, ''));
  };
  const handleReset = () => setValue(null);

  return { value, handleChange, handleReset };
};
