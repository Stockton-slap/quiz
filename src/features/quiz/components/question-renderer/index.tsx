import { Question } from '@/abstractions/question'
import { TypeProps } from '@/features/quiz/models/quiz'
import { SingleChoiceQuestion } from '../single-choice-question'

type IProps = { question: Question; quizType: TypeProps }

export default function QuestionRenderer({ question, quizType }: IProps) {
  switch (quizType) {
    case 'single-choice':
      return <SingleChoiceQuestion question={question} />

    case 'input':
      return <p>Input question renderer here...</p>
    default:
      return null
  }
}
