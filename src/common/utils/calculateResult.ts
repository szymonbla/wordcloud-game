import { SectionListData, AnswerProps } from 'common/types';

export const calculateScore = (allQuestions: SectionListData, selectedAnswers: AnswerProps[]) => {
  let correctSelected = 0;
  let incorrectSelected = 0;
  let correctUnselected = 0;
  let finalScore = 0;

  selectedAnswers.forEach((userSelected) => {
    if (userSelected.valid === true) {
      correctSelected += 1;
    } else if (userSelected.valid === false) {
      incorrectSelected += 1;
    }
  });

  allQuestions.questions.some((questionItem) => {
    if (questionItem.valid === true && !selectedAnswers.some((user) => user.label === questionItem.label)) {
      correctUnselected += 1;
    }
  });

  finalScore = 2 * correctSelected - (incorrectSelected + correctUnselected);

  return finalScore;
};
