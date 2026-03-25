import { Question } from '@/abstractions/question'
import { TypeProps } from '@/features/quiz/models/quiz'
import { SingleChoiceQuestion } from '../single-choice-question'

type IProps = {
  question: Question
  quizType: TypeProps
  onNext?: () => void
  onAnswer?: (answer: string) => void
  selectedAnswer?: string
}

export default function QuestionRenderer({
  question,
  quizType,
  onNext,
  onAnswer,
  selectedAnswer,
}: IProps) {
  switch (quizType) {
    case 'single-choice':
      return (
        <SingleChoiceQuestion
          question={question}
          onNext={onNext}
          onAnswer={onAnswer}
          selectedAnswer={selectedAnswer}
        />
      )

    case 'input':
      return <p>Input question renderer here...</p>
    default:
      return null
  }
}
