'use client'
import { Quiz } from '@/features/quiz/models/quiz'
import QuestionRenderer from '../question-renderer'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { getQuizBySlug } from '../../services/quiz-service'
import { Button } from '@/shared/components/common/button'

export default function QuestionList() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()

  const [quiz, setQuiz] = React.useState<Quiz | null>(null)
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!slug) return
    getQuizBySlug(slug)
      .then(setQuiz)
      .catch((err) => {
        throw new Error(err)
      })
  }, [slug])

  if (!quiz) return <p>Loading...</p>

  const currentQuestion = quiz.getQuestion(currentIndex)
  const isFinished = currentQuestion === null

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      return
    }
    router.back()
  }

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      <div className="absolute">
        <Button
          onClick={handleBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Back
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-center">{quiz.title}</h1>
      <p className="text-center mt-1 text-sm text-gray-600">
        {currentIndex + 1} / {quiz.questions.length}
      </p>
      <p className="text-gray-600 text-center mt-1">{quiz.description}</p>
      {isFinished ? (
        <p className="text-center mt-6">Finished!</p>
      ) : (
        <div key={currentIndex}>
          <QuestionRenderer
            question={currentQuestion}
            quizType={quiz.type}
            onNext={handleNext}
          />
        </div>
      )}
    </div>
  )
}
