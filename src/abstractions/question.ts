export abstract class Question {
  constructor(public title: string) {}

  abstract checkAnswer(userAnswer: unknown): boolean
}
