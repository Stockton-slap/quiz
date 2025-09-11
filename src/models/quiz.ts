import { Question } from "../abstractions/question";

export class Quiz {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public questions: Question[]
  ) {
    if (!questions) this.questions = [];
  }

  getQuestion(index: number) {
    return this.questions[index] ?? null;
  }
}
