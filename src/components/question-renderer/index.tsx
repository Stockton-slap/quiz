import { Question } from "@/abstractions/question";
import { MultipleChoiceQuestion } from "@/models/questions";
import { TypeProps } from "@/models/quiz";
import { Button } from "../common/button";
import { SingleChoiceQuestion } from "../single-choice-question";

type IProps = { question: Question, quizType: TypeProps }

export default function QuestionRenderer({ question, quizType }: IProps) {
  switch (quizType) {
    case 'single-choice':
    return <SingleChoiceQuestion question={question} />

    case 'input':
      return <p>Input question renderer here...</p>;
    default:
      return null;
  }
}
