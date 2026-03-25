import { Question } from '../../../abstractions/question'

export class SingleChoice extends Question {
  constructor(
    title: string,
    public options: string[],
    public correct: string,
  ) {
    super(title)
  }

  checkAnswer(userAnswer: string) {
    return userAnswer === this.correct
  }
}

export class Input extends Question {
  constructor(
    title: string,
    public correct: string,
  ) {
    super(title)
  }

  checkAnswer(userAnswer: string) {
    return userAnswer === this.correct
  }
}

export class Matchup extends Question {
  constructor(
    title: string,
    public buckets: string[][],
    public correctSequence: string[],
  ) {
    super(title)
  }

  checkAnswer(userAnswer: string[]) {
    return this.correctSequence.every((word, idx) => word === userAnswer[idx])
  }
}
