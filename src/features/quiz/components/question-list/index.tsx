'use client'
import { Quiz } from '@/features/quiz/models/quiz'
import QuestionRenderer from '../question-renderer'
import { useParams } from 'next/navigation'
import React from 'react'
import { getQuizBySlug } from '../../services/quiz-service'

export default function QuestionList() {
  const { slug } = useParams<{ slug: string }>()
  const [quiz, setQuiz] = React.useState<Quiz | null>(null)

  React.useEffect(() => {
    if (!slug) return
    getQuizBySlug(slug)
      .then(setQuiz)
      .catch((err) => {
        throw new Error(err)
      })
  }, [slug])

  const handleNext = () => {
    return
  }

  if (!quiz) return <p>Loading...</p>

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">{quiz.title}</h1>
      <p className="text-gray-600 text-center mt-1">{quiz.description}</p>
      {quiz.questions.map((question) => (
        <div key={question.id}>
          <QuestionRenderer question={question} quizType={quiz.type} />
        </div>
      ))}
    </div>
  )
}
