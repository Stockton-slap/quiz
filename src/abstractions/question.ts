export abstract class Question {
  constructor(
    public id: string,
    public title: string,
  ) {}

  abstract checkAnswer(userAnswer: unknown): boolean
}
