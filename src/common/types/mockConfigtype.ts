export interface SectionListData {
  sectionQuestion: string;
  questions: AnswerProps[];
}

export interface AnswerProps {
  label: string;
  valid: boolean;
}
