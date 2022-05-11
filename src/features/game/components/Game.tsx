import { useState, useEffect, useRef } from 'react';

import { Grid } from '@mui/material';

import { AnswerPillsWrapper, ButtonComponent } from 'common/components';
import { mockConfig } from 'common/utils';
import { MockConfigData } from 'common/types';

export const Game = () => {
  const [questionList, setQuestionList] = useState<MockConfigData[]>([{ all_words: [], good_words: [], question: '' }]);
  const [questionListNumber, setQuestionListNumber] = useState<number | undefined>(undefined);
  const isMounted = useRef<boolean>();

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    setQuestionListNumber(Math.floor(0 + Math.random() * mockConfig.length));
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (typeof questionListNumber !== 'undefined') {
      setQuestionList([
        {
          all_words: mockConfig[questionListNumber].all_words,
          good_words: mockConfig[questionListNumber].good_words,
          question: mockConfig[questionListNumber].question
        }
      ]);
    }
  }, [questionListNumber]);

  return (
    <>
      <Grid container sx={{ width: '50%', height: '50%' }}>
        <AnswerPillsWrapper questionList={questionList} />
      </Grid>
      <ButtonComponent label="Check answers" sx={{ width: '20%' }} />
    </>
  );
};
