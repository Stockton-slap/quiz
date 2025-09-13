import { Question } from '@/abstractions/question'
import { MultipleChoiceQuestion } from '@/features/quiz/models/questions'
import { Button } from '../../../../shared/components/common/button'

type Props = { question: Question }

export const SingleChoiceQuestion = ({ question }: Props) => {
  const singleChoiceQuestion = question as MultipleChoiceQuestion
  return (
    <>
      <h2 className="text-center mt-4">{singleChoiceQuestion.title}</h2>
      <ul className="grid grid-cols-2 gap-4 mt-4">
        {singleChoiceQuestion.options.map((answer, idx) => (
          <li key={idx}>
            <Button className="w-full bg-neutral text-secondary text-center px-3 py-1 rounded cursor-pointer hover:bg-hover hover:text-white">
              {answer}
            </Button>
          </li>
        ))}
      </ul>
      <Button className='w-[200px] mt-4 bg-next text-white text-center px-3 py-1 rounded cursor-pointer hover:bg-nextHover'>Next</Button>
    </>
  )
}
