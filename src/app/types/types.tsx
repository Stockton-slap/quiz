type Question = {
  id: string
  question: string | number
  answers: string[] | number[]
  correctAnswer: string | number
}

type Quiz = {
  id: string
  title: string
  description: string
  questions: Question[]
}

export type { Question, Quiz }
