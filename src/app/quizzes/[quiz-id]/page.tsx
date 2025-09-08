interface Props {
    params: { quizId: string };
  }
  
  export default async function QuizPage({ params }: Props) {
    console.log(params.quizId); // "trivia-1" if URL is /quiz/trivia-1
  }
  