import { Question } from '../../../abstractions/question'

export type TypeProps =
  | 'single-choice'
  | 'input'
  | 'match-up'
  | 'screenshot'
  | 'soundtrack'
  | 'emoji'

export class Quiz {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public questions: Question[],
    public type: TypeProps,
  ) {
    if (!questions) this.questions = []
  }

  getQuestion(index: number) {
    return this.questions[index] ?? null
  }
}
