import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useGame, useUser } from 'state';
import { Game } from 'features';
import { UserLayout } from 'layouts/UserLayout';
import { AnswerProps, SectionListData } from 'common/types';
import { mockConfig, calculateScore } from 'common/utils';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';

export const GamePage = () => {
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<AnswerProps[]>([]);
  const [questionList, setQuestionList] = useState<SectionListData>({
    questions: [],
    sectionQuestion: ''
  });
  const [questionListNumber, setQuestionListNumber] = useState<number | undefined>(undefined);

  const { nickname } = useUser();
  const { updateGameData, isSubmitted } = useGame();
  const isMounted = useRef<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    if (!nickname) {
      navigate(RoutesDefinition.login);
    }
    setQuestionListNumber(Math.floor(0 + Math.random() * mockConfig.length));

    isMounted.current = true;
  }, [navigate, nickname]);

  useEffect(() => {
    const fetchMockedData = () => {
      if (typeof questionListNumber !== 'undefined') {
        mockConfig[questionListNumber].all_words.forEach((item) => {
          if (mockConfig[questionListNumber].good_words.some((goodWord) => goodWord === item)) {
            setQuestionList((prevState) => ({
              questions: [...prevState.questions, { label: item, valid: true }],
              sectionQuestion: mockConfig[questionListNumber].question
            }));
          } else {
            setQuestionList((prevState) => ({
              questions: [...prevState.questions, { label: item, valid: false }],
              sectionQuestion: mockConfig[questionListNumber].question
            }));
          }
        });
      }
    };
    fetchMockedData();
  }, [questionListNumber]);

  const handleSubmit = () => {
    if (isSubmitted) {
      navigate(RoutesDefinition.result);
    } else {
      const finalScore = calculateScore(questionList, userSelectedAnswers);

      updateGameData({ isSubmitted: true, result: finalScore });

      return finalScore;
    }
  };

  return (
    <UserLayout>
      <Game
        questionList={questionList}
        handleSubmit={handleSubmit}
        setUserSelectedAnswers={setUserSelectedAnswers}
        userSelectedAnswers={userSelectedAnswers}
      />
    </UserLayout>
  );
};
