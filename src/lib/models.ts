  // <-----------------------------------QUESTION----------------------------------------->
export class Question {
    id: string;
    title: string;
    type: 'multiple-choice' | 'text';
    answers: string[];
    correctAnswer: string
  
    constructor(id: string, title: string, type: 'multiple-choice' | 'text', answers: string[], correctAnswer: string) {
      this.id = id;
      this.title = title;
      this.type = type;
      this.answers = answers;
      this.correctAnswer = correctAnswer
    }
  
    checkAnswer(answer: string) {
      return this.type === 'multiple-choice' && this.answers.includes(answer);
    }
  }
  
  // <-----------------------------------QUIZ----------------------------------------->
  export class Quiz {
    id: string;
    title: string;
    questions: Question[];
    description: string
  
    constructor(id: string, title: string, questions: Question[], description: string) {
      this.id = id;
      this.title = title;
      this.description = description,
      this.questions = questions;
    }
  
    getQuestion(id: string) {
      return this.questions.find(q => q.id === id);
    }
  
    static fromFirebase(data: any, id: string) {
      const questions = (data.questions || []).map(
        (q: any) => new Question(q.id, q.title, q.type, q.answers || [], q.correctAnswer)
      );
      return new Quiz(id, data.title, questions, data.description);
    }
  }
  