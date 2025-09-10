  // <-----------------------------------QUESTION----------------------------------------->
export interface IQuestion {
    id: string;
    title: string;
    type: 'multiple-choice' | 'text';
    answers: string[];
    correctAnswer: string
}

export interface IAnswerChecker {
    check(question: IQuestion, answer: string): boolean
}

export class MultipleChoiceChecker implements IAnswerChecker {
    check(question: IQuestion, answer: string) {
      return question.type === 'multiple-choice' && question.answers.includes(answer)
    }
  }

export class Question implements IQuestion {  
    constructor(public id: string, public title: string, public type: 'multiple-choice' | 'text', public answers: string[], public correctAnswer: string) {
      this.id = id;
      this.title = title;
      this.type = type;
      this.answers = answers;
      this.correctAnswer = correctAnswer
    }
  }
  
  // <-----------------------------------QUIZ----------------------------------------->
  export interface IQuiz {
    id: string
    title: string
    description: string
    questions: Question[]
  }

  export class Quiz {

    constructor(public id: string, public title: string, public questions: Question[], public description: string) {
      this.id = id;
      this.title = title;
      this.description = description,
      this.questions = questions;
    }
  
    getQuestion(id: string) {
      return this.questions.find(q => q.id === id);
    }
  }
  
  export class QuizFactory {
    static fromFirebase(data: any, id: string): Quiz {
      const questions = (data.questions || []).map(
        (q: any) => new Question(q.id, q.title, q.type, q.answers || [], q.correctAnswer)
      )
      return new Quiz(id, data.title, questions, data.description)
    }
  }