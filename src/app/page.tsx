import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="px-6 pt-[200px]">
        <h1 className="text-[28px] leading-[34px] text-center">
          QUIZ
        </h1>

        <p className="mt-5 text-[18px] leading-[28px] mt-8 text-center">
          Puzzle out various quizzes
        </p>
        <Link
          className="w-[200px] mt-4 mt-8 text-white bg-black flex justify-center mx-auto p-3 rounded-[12px] cursor-pointer"
          href='/quiz'
        >
          <span className="text-[16px] text-[18px]">Get started</span>
        </Link>
      </div>
    </main>
  )
}
