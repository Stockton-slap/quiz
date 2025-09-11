import { Quiz } from "@/models/quiz";
import { MultipleChoiceQuestion, InputQuestion } from "@/models/questions";

export class QuizFactory {
  static fromData(id: string, data: any): Quiz {
    const rawQuestions = Array.isArray(data.questions) ? data.questions : [];
    const questions = rawQuestions.map((q: any) => {
      switch (q.type) {
        case "single-choice":
          return new MultipleChoiceQuestion(q.id, q.title, q.options, q.correct);
        case "input":
          return new InputQuestion(q.id, q.title, q.correct);
        default:
          throw new Error(`Unknown question type: ${q.type}`);
      }
    });

    return new Quiz(id, data.title, data.description, questions);
  }
}
