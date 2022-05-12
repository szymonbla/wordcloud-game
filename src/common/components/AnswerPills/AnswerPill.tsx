import { useState } from 'react';

import { Box, Chip, Typography } from '@mui/material';

import { useGame } from 'state';
import { AnswerProps } from 'common/types';
interface AnswerPillProps {
  label: string;
  valid: boolean;
  handleClick: ({ label, valid }: AnswerProps) => void;
}

export const AnswerPill = ({ label, valid, handleClick }: AnswerPillProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const { isSubmitted } = useGame();

  const submittedSelectedPillCondition = isSubmitted && selected;

  const handlePillSelection = () => {
    if (!isSubmitted) {
      handleClick({ label, valid });
      setSelected(!selected);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {isSubmitted && (valid || selected) && (
        <Typography
          variant="subtitle2"
          fontWeight="600"
          sx={{
            position: 'absolute',
            top: -30,
            left: 10,
            textAlign: 'center',
            color: valid ? 'success.main' : 'error.main'
          }}
        >
          {valid ? 'GOOD' : 'BAD'}
        </Typography>
      )}
      <Chip
        label={label}
        clickable={isSubmitted ? false : true}
        variant={selected ? 'filled' : 'outlined'}
        onClick={handlePillSelection}
        sx={{
          typography: 'subtitle1',
          p: 3,
          border: selected ? '5px solid' : '1px solid',
          borderColor: 'grey.800',
          backgroundColor: submittedSelectedPillCondition ? (valid ? 'success.main' : 'error.main') : 'grey.600',
          color: submittedSelectedPillCondition ? 'common.white' : 'unset',
          '&:hover': {
            backgroundColor: 'grey.600'
          }
        }}
      />
    </Box>
  );
};
