import { Input, SingleChoice } from './questions'
import { Quiz } from './quiz'
import { Matchup } from './questions'
// import { Screenshot } from './questions'
// import { Soundtrack } from './questions'
// import { Emoji } from './questions'

export class QuizFactory {
  static fromData(id: string, data: any): Quiz {
    const rawQuestions = Array.isArray(data.questions) ? data.questions : []
    const questions = rawQuestions.map((q: any) => {
      switch (data.type) {
        case 'single-choice':
          return new SingleChoice(q.title, q.options, q.correct)
        case 'input':
          return new Input(q.title, q.correct)
        case 'match-up':
          return new Matchup(q.title, q.buckets, q.correctSequence)
        case 'screenshot':
        // return new Screenshot(q.id, q.title, q.imageUrl)
        case 'soundtrack':
        // return new Soundtrack(q.id, q.title, q.audioUrl)
        case 'emoji':
        // return new Emoji(q.id, q.title, q.emoji)
        default:
          throw new Error(`Unknown quiz type: ${data.type}`)
      }
    })

    return new Quiz(id, data.title, data.description, questions, data.type)
  }
}
