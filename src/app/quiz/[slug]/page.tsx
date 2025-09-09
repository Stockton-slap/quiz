'use client'
import { getQuizBySlug } from "@/lib/service";
import { Quiz } from "@/lib/models"; 
import { useParams } from "next/navigation"
import React from "react";

export default function QuizPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quiz, setQuiz] = React.useState<Quiz | null>(null)

  React.useEffect(() => {
    if (!slug) return 
    getQuizBySlug(slug).then(setQuiz)
  }, [slug])

  if (!quiz) return <p>Loading...</p>

  return <div className="divide-y divide-gray-200">
  {quiz.questions.map((q) => {
    return (
      <div key={q.id} className="p-6">
        <p className="text-lg font-medium text-gray-800 mb-2 text-center">
          {q.title}
        </p>
        {q.type === 'multiple-choice' ? (
          <ul className="grid grid-cols-2 gap-4">
            {q.answers.map((a, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-800 text-center px-3 py-1 rounded cursor-pointer hover:bg-blue-200 transition"
              >
                {a}
              </li>
            ))}
          </ul>
        ) : (
          <p className="italic text-gray-500">Answers are absent</p>
        )}
      </div>
    )
  })}

</div> 
}
