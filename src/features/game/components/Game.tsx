import { Dispatch } from 'react';

import { useGame } from 'state';
import { AnswerPillsWrapper, ButtonComponent } from 'common/components';
import { AnswerProps, SectionListData } from 'common/types';

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
      <AnswerPillsWrapper
        questionList={questionList}
        setUserSelectedAnswers={setUserSelectedAnswers}
        userSelectedAnswers={userSelectedAnswers}
      />
      <ButtonComponent
        label={isSubmitted ? 'Finish Game' : 'Check answers'}
        handleClick={handleSubmit}
        sx={{ width: '30%', mt: 4 }}
      />
    </>
  );
};
