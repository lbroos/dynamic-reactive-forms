import { QuestionType } from './questiontype.enum';

export class Question {
    questionId: number;
    question: string;
    required: boolean;
    questiontype: QuestionType;
    possibleAnswers?: string[];
    answer: string;

    constructor(options: {
        questionId: number,
        question: string,
        required?: boolean,
        questiontype?: string,
        possibleAnswers?: string[],
        answer?: string
      }) {
      this.questionId = options.questionId;
      this.question = options.question;
      this.required = !!options.required;
      this.questiontype = QuestionType[options.questiontype];
      this.possibleAnswers = options.possibleAnswers || null;
      this.answer = options.answer;
    }
}

