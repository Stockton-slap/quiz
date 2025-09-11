export abstract class Question {
  constructor(
    public id: string,
    public title: string,
    public type: 'single-choice' | 'input' | 'match-up' | 'screenshot' | 'soundtrack' | 'emoji'
  ) {}

  abstract checkAnswer(userAnswer: unknown): boolean;
}
