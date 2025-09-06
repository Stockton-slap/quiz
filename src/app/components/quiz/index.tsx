import quizzes from '@/app/questions.json'

type Question = {
  id: string
  question: string
  answers: string[]
  correctAnswer: string
}

type Quiz = {
  id: string
  title: string
  questions: Question[]
}

const Quiz = () => {
  const questions: Question[] = quizzes.quizzes.flatMap(
    (quiz) => quiz.questions,
  )
  return (
    <div>
      {questions.map((question: Question) => {
        console.log(question)
        return <div key={question.id}>{question.correctAnswer}</div>
      })}
    </div>
  )
}

export default Quiz
