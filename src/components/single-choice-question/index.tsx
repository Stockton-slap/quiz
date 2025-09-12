import { Question } from "@/abstractions/question";
import { MultipleChoiceQuestion } from "@/models/questions";
import { Button } from "../common/button";

type Props = { question: Question };

export const SingleChoiceQuestion = ({ question }: Props) => {
    const singleChoiceQuestion = question as MultipleChoiceQuestion;
    return (
     <>
       <h2 className="text-center mt-4">{singleChoiceQuestion.title}</h2>
     <ul className="grid grid-cols-2 gap-4 mt-4">
        {singleChoiceQuestion.options.map((answer, idx) => (
          <li key={idx}>
            <Button className="w-full bg-blue-100 text-blue-800 text-center px-3 py-1 rounded cursor-pointer hover:bg-blue-200">{answer}</Button>
          </li>
        ))}
      </ul>
    </> 
    );
}