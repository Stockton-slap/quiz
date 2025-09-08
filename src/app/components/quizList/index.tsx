'use client'

import { useEffect, useState } from 'react'
import { getQuizzes } from '@/lib/getQuizzes'
import { Quiz } from '@/app/types/types'

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzesData = await getQuizzes();
        setQuizzes(quizzesData as Quiz[]);
      } catch (error) {
        setQuizzes([]);
      }
    }
    fetchQuizzes();
  }, [])
  console.log(quizzes)
  
  return (
    <div>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h2>{quiz.title}</h2>
          <p>{quiz.description}</p>
          {quiz.questions.map((q: any) => (
            <div key={q.id}>
              <p>{q.question}</p>
              {q.type === 'multiple-choice' && (
                <ul>
                  {q.answers.map((a: string, idx: number) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
