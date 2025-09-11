'use client'
import { Quiz } from "@/models/quiz";
import { Link } from "../common/link";

export default function QuizItem({ quiz }: { quiz: Quiz }) {
  return (
    <li className="bg-primary rounded-[12px] p-6 border border-black w-full">
      <Link href={`/quiz/${quiz.id}`}>
        <h2 className="text-2xl font-semibold">{quiz.title}</h2>
        <p className="mt-2 text-gray-700">{quiz.description}</p>
      </Link>
    </li>
  );
}
