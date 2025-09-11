'use client'
import { Quiz } from "@/models/quiz";
import QuestionRenderer from "../question-renderer";
import { getQuizBySlug } from "@/lib/service";
import { useParams } from "next/navigation";
import React from "react";


export default function QuestionList() {
    const { slug } = useParams<{ slug: string }>();
    const [quiz, setQuiz] = React.useState<Quiz | null>(null);
  
    React.useEffect(() => {
      if (!slug) return;
      getQuizBySlug(slug).then(setQuiz);
    }, [slug]);
  
    if (!quiz) return <p>Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center">{quiz.title}</h1>
          <p className="text-gray-600 text-center mt-1">{quiz.description}</p>
    
          <div className="divide-y divide-gray-300">
            {quiz.questions.map(q => (
              <div key={q.id}>
                <QuestionRenderer question={q} />
              </div>
            ))}
          </div>
        </div>
      );
}
