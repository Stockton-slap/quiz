'use client'
import { Quiz } from '@/features/quiz/models/quiz'
import { Link } from '../../../../shared/components/common/link'

export default function QuizItem({ quiz }: { quiz: Quiz }) {
  return (
    <li className="border border-black rounded-[12px]">
      <Link
        href={`/quiz/${quiz.id}`}
        className="block w-full h-full p-6 rounded-[12px]"
      >
        <h2 className="txt-[20_20_400]">{quiz.title}</h2>
        <p className="mt-2 txt-[14_14_400]">{quiz.description}</p>
      </Link>
    </li>
  )
}
