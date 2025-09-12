import { InputQuestion, MultipleChoiceQuestion } from "./questions";
import { Quiz } from "./quiz";

export class QuizFactory {
  static fromData(id: string, data: any): Quiz {
    const rawQuestions = Array.isArray(data.questions) ? data.questions : [];
    const questions = rawQuestions.map((q: any) => {
      switch (data.type) { 
        case "single-choice":
          return new MultipleChoiceQuestion(q.id, q.title, q.options, q.correct);
        case "input":
          return new InputQuestion(q.id, q.title, q.correct);
        default:
          throw new Error(`Unknown quiz type: ${data.type}`);
      }
    });

    return new Quiz(id, data.title, data.description, questions, data.type);
  }
}
