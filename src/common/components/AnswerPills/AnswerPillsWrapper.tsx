import { Grid, Typography } from '@mui/material';

import { MockConfigData } from 'common/types';
import { AnswerPill } from './AnswerPill';

interface AnswerPillsWrapperProps {
  questionList: MockConfigData[];
}

export const AnswerPillsWrapper = ({ questionList }: AnswerPillsWrapperProps) => {
  return (
    <>
      {questionList &&
        questionList.map(({ all_words, good_words, question }, indexMain) => {
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
              key={indexMain}
            >
              <Typography variant="h3">{question.toUpperCase()}</Typography>
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
                {all_words.map((word, index) => {
                  if (good_words.some((goodWord) => goodWord === word)) {
                    return (
                      <Grid item key={index}>
                        <AnswerPill label={word} valid={true} />
                      </Grid>
                    );
                  }
                  return (
                    <Grid item key={index}>
                      <AnswerPill label={word} valid={true} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};
