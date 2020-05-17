export class QuestionAnswers {
    questionId: number;
    answer: string;

    constructor(options: {
        questionId: number,
        answer: string
      }) {
      this.questionId = options.questionId;
      this.answer = options.answer;
    }
}