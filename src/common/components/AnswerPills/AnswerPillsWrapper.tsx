import { Dispatch } from 'react';

import { Grid, Typography } from '@mui/material';

import { AnswerProps, SectionListData } from 'common/types';
import { AnswerPill } from './AnswerPill';

interface AnswerPillsWrapperProps {
  questionList: SectionListData;
  setUserSelectedAnswers: Dispatch<React.SetStateAction<AnswerProps[]>>;
  userSelectedAnswers: AnswerProps[];
}

export const AnswerPillsWrapper = ({
  questionList,
  setUserSelectedAnswers,
  userSelectedAnswers
}: AnswerPillsWrapperProps) => {
  const handleUserSelection = ({ label, valid }: AnswerProps) => {
    if (userSelectedAnswers.some((userSelectedAnswer) => userSelectedAnswer.label === label)) {
      setUserSelectedAnswers(userSelectedAnswers.filter((userSelectedAnswer) => userSelectedAnswer.label !== label));
    } else {
      setUserSelectedAnswers((prevUserSelectedAnswers) => [...prevUserSelectedAnswers, { label, valid }]);
    }
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Typography variant="h3">{questionList && questionList.sectionQuestion.toUpperCase()}</Typography>
      <Grid
        container
        sx={{
          width: '100%',
          height: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'space-evenly'
        }}
        spacing={6}
      >
        {questionList &&
          questionList.questions.map(({ label, valid }, index) => (
            <Grid item key={index}>
              <AnswerPill label={label} valid={valid} handleClick={() => handleUserSelection({ label, valid })} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
