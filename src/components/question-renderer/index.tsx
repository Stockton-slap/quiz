import { Question } from "@/abstractions/question";
import { MultipleChoiceQuestion } from "@/models/questions";

export default function QuestionRenderer({ question }: { question: Question }) {
  switch (question.type) {
    case 'single-choice':
      const mcq = question as MultipleChoiceQuestion;
      return (
        <ul className="grid grid-cols-2 gap-4 mt-8">
          {mcq.options.map((answer, idx) => (
            <li key={idx} className="bg-blue-100 text-blue-800 text-center px-3 py-1 rounded cursor-pointer hover:bg-blue-200">
              {answer}
            </li>
          ))}
        </ul>
      );
    case 'input':
      return <p>Input question renderer here...</p>;
    default:
      return null;
  }
}
