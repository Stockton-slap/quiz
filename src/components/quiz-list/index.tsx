'use client'

import { useEffect, useState } from 'react'
import { getAllQuizzes } from '@/lib/service'
import QuizItem from '../quiz-item'
import { Quiz } from '@/models/quiz';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    getAllQuizzes().then(setQuizzes).catch(err => {throw new Error(err)});
  }, []);

  if (quizzes.length === 0) return <p>Loading or no quizzes found...</p>;

  return (
    <ul className="mx-auto p-6 w-full flex flex-wrap gap-6">
    {quizzes.map((quiz) => (
      <QuizItem key={quiz.id} quiz={quiz} />
    ))}
  </ul>
  )
}
