import { useState } from 'react';

import { Chip } from '@mui/material';

interface AnswerPillProps {
  label: string;
  valid: boolean;
}

export const AnswerPill = ({ label }: AnswerPillProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Chip
      label={label}
      variant={selected ? 'filled' : 'outlined'}
      onClick={handleClick}
      sx={{
        typography: 'subtitle1',
        p: 3,
        borderColor: 'grey.800',
        backgroundColor: selected ? 'grey.600' : 'unset',
        color: selected ? 'common.white' : 'unset',
        '&:hover': {
          backgroundColor: 'grey.600'
        }
      }}
    />
  );
};
