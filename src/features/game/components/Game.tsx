import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { AnswerPill } from 'common/components';
import { mockConfig } from 'common/utils';
import { MockConfigData } from 'common/types';

export const Game = () => {
  const [questionList, setQuestionList] = useState<MockConfigData[]>([{ all_words: [], good_words: [], question: '' }]);
  const [questionListNumber, setQuestionListNumber] = useState<number | undefined>(undefined);
  const isMounted = useRef<boolean>();

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    setQuestionListNumber(Number(Math.floor(0 + Math.random() * mockConfig.length)));
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
    <Box>
      {questionList.map(({ all_words, good_words }) =>
        all_words.map((word, index) => {
          if (good_words.some((goodWord) => goodWord === word)) {
            return <AnswerPill label={word} valid={true} key={index} />;
          }
          return <AnswerPill label={word} valid={false} key={index} />;
        })
      )}
    </Box>
  );
};
