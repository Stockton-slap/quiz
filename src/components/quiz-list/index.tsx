'use client'

import { useEffect, useState } from 'react'
import { getAllQuizzes } from '@/lib/service'
import { Link } from '../common/link'
import { Quiz } from '@/lib/models'

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzesData = await getAllQuizzes()
        setQuizzes(quizzesData as Quiz[])
      } catch (error) {
        setQuizzes([])
        throw error
      }
    }
    fetchQuizzes()
  }, [])
  console.log(quizzes)

  return (
    <div className="mx-auto p-6 bg-primary">
      {quizzes.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Quizzes are loading or absent...
        </p>
      )}
     <ul className='flex flex-wrap gap-6'> 
      {quizzes.map((quiz) => {
        return (
          <li className='bg-primary rounded-[12px] p-6 border-[1px] border-solid border-black w-full'> 
           <Link href={`/quiz/${quiz.id}`} key={quiz.id} className="">
          <h2 className="text-2xl font-semibold text-gray-900">
            {quiz.title}
          </h2>
          <p className="mt-3 text-gray-700">{quiz.description}</p>
        </Link>
        </li>
         )
      })}</ul>
    </div>
  )
}
