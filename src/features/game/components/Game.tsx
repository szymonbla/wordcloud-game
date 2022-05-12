import { Dispatch } from 'react';

import { Grid } from '@mui/material';

import { AnswerPillsWrapper, ButtonComponent } from 'common/components';
import { AnswerProps, SectionListData } from 'common/types';
import { useGame } from 'state';

interface GameProps {
  questionList: SectionListData;
  handleSubmit: () => void;
  setUserSelectedAnswers: Dispatch<React.SetStateAction<AnswerProps[]>>;
  userSelectedAnswers: AnswerProps[];
}

export const Game = ({ questionList, handleSubmit, setUserSelectedAnswers, userSelectedAnswers }: GameProps) => {
  const { isSubmitted } = useGame();

  return (
    <>
      <Grid container sx={{ width: '50%', height: '50%' }}>
        <AnswerPillsWrapper
          questionList={questionList}
          setUserSelectedAnswers={setUserSelectedAnswers}
          userSelectedAnswers={userSelectedAnswers}
        />
      </Grid>
      <ButtonComponent
        label={isSubmitted ? 'Finish Game' : 'Check answers'}
        handleClick={handleSubmit}
        sx={{ width: '20%' }}
      />
    </>
  );
};
