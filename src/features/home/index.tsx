import { Link } from "@/shared/components/common/link"

export const Home = () => {
  return (
    <div className="px-6 pt-[200px]">
      <h1 className="txt-[32_24_500] text-center">QUIZ</h1>

      <p className="mt-5 txt-[18_18_400] mt-8 text-center">
        Puzzle out various quizzes
      </p>
      <Link
        className="w-[200px] mt-4 mt-8 text-white bg-black flex justify-center mx-auto px-3 py-5 rounded-[12px] uppercase txt-[16_16_700] font-[montserrat] cursor-pointer"
        href="/quiz"
      >
      Get started
      </Link>
    </div>
  )
}
