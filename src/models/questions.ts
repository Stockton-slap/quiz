import { Question } from "../abstractions/question";

export class MultipleChoiceQuestion extends Question {
  constructor(
    id: string,
    title: string,
    public options: string[],
    public correct: string
  ) {
    super(id, title, "single-choice"); 
  }

  checkAnswer(userAnswer: string) {
    return userAnswer === this.correct;
  }
}

export class InputQuestion extends Question {
  constructor(id: string, title: string, public correct: string) {
    super(id, title, "input"); 
  }

  checkAnswer(userAnswer: string) {
    return userAnswer === this.correct;
  }
}

export class MatchupQuestion extends Question {
  constructor(
    id: string,
    title: string,
    public buckets: string[][],
    public correctSequence: string[]
  ) { 
    super(id, title, "match-up");
  }

  checkAnswer(userAnswer: string[]) {
    return this.correctSequence.every((word, idx) => word === userAnswer[idx]);
  }
}
