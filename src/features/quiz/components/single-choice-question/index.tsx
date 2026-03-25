import { Question } from '@/abstractions/question'
import { SingleChoice } from '@/features/quiz/models/questions'
import { Button } from '../../../../shared/components/common/button'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

const ADVANCE_AFTER_MS = 1200

type Props = {
  question: Question
  onNext?: () => void
  onAnswer?: (answer: string) => void
  selectedAnswer?: string
}

export const SingleChoiceQuestion = ({
  question,
  onNext,
  onAnswer,
  selectedAnswer,
}: Props) => {
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const { title, options, correct } = question as SingleChoice
  const onNextRef = useRef(onNext)
  onNextRef.current = onNext

  useEffect(() => {
    setShowFeedback(false)
    setIsCorrect(false)
  }, [question])

  useEffect(() => {
    if (!showFeedback) return
    const id = window.setTimeout(() => {
      onNextRef.current?.()
    }, ADVANCE_AFTER_MS)
    return () => window.clearTimeout(id)
  }, [showFeedback])

  const selectAnswer = (answer: string) => {
    if (showFeedback) return
    onAnswer?.(answer)
  }

  const handleContinue = () => {
    if (!selectedAnswer || showFeedback) return
    setIsCorrect(selectedAnswer === correct)
    setShowFeedback(true)
  }

  return (
    <>
      {showFeedback && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          aria-live="polite"
        >
          <div
            className={classNames(
              'animate-quiz-feedback flex h-44 w-44 sm:h-52 sm:w-52 items-center justify-center rounded-full shadow-2xl ring-4 ring-white/40',
              isCorrect ? 'bg-correct' : 'bg-incorrect',
            )}
          >
            {isCorrect ? (
              <svg
                className="h-24 w-24 text-white sm:h-28 sm:w-28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path className="animate-quiz-check-draw" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                className="h-24 w-24 text-white sm:h-28 sm:w-28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path className="animate-quiz-cross-draw" d="M6 6l12 12" />
                <path className="animate-quiz-cross-draw-2" d="M18 6L6 18" />
              </svg>
            )}
          </div>
        </div>
      )}

      <h2 className="text-center mt-4">{title}</h2>
      <ul className="grid grid-cols-2 gap-4 mt-4">
        {options.map((answer, idx) => (
          <li key={idx}>
            <Button
              type="button"
              disabled={showFeedback}
              onClick={() => selectAnswer(answer)}
              className={classNames(
                'w-full text-center px-3 py-1 rounded cursor-pointer shadow-md hover:shadow-lg transition-shadow',
                {
                  'bg-correct text-white': showFeedback && answer === correct,
                  'bg-incorrect text-white':
                    showFeedback &&
                    answer === selectedAnswer &&
                    selectedAnswer !== correct,
                  'bg-neutral text-secondary opacity-60 cursor-not-allowed':
                    showFeedback &&
                    answer !== correct &&
                    answer !== selectedAnswer,
                  'bg-neutral text-secondary':
                    !showFeedback &&
                    (!selectedAnswer || answer !== selectedAnswer),
                  'bg-hover text-white ring-2 ring-secondary ring-offset-2':
                    !showFeedback &&
                    !!selectedAnswer &&
                    answer === selectedAnswer,
                  'hover:bg-hover hover:text-white':
                    !showFeedback &&
                    (!selectedAnswer || answer !== selectedAnswer),
                },
              )}
            >
              {answer}
            </Button>
          </li>
        ))}
      </ul>
      {!!selectedAnswer && !showFeedback && (
        <div className="relative z-[110] flex justify-center mt-6">
          <Button
            type="button"
            onClick={handleContinue}
            className="bg-nextEnabled hover:bg-next text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            Continue
          </Button>
        </div>
      )}
    </>
  )
}
