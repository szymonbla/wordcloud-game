import { useState } from 'react';

import { Chip } from '@mui/material';

import { AnswerProps } from 'common/types';
interface AnswerPillProps {
  label: string;
  valid: boolean;
  handleClick: ({ label, valid }: AnswerProps) => void;
}

export const AnswerPill = ({ label, valid, handleClick }: AnswerPillProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handlePillSelection = () => {
    handleClick({ label, valid });
    setSelected(!selected);
  };

  return (
    <Chip
      label={label}
      variant={selected ? 'filled' : 'outlined'}
      onClick={handlePillSelection}
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
