import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question.model';
import { QuestionAnswers } from './questionAnswers.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from './questiontype.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "Dynamic Reactive Forms With Angular and Angular Material";
  questions: Question[];
  answers: QuestionAnswers[];
  questionsForm: FormGroup;
  questionType = QuestionType;

  constructor(private questionService: QuestionService) {
  }

  public ngOnInit(): void {
    this.getQuestions();
  }

   public onSubmit(): void {
    this.answers = [];
    this.questions.forEach(question => {
      this.answers.push(new QuestionAnswers({
        questionId: question.questionId,
        answer: this.questionsForm.get(question.questionId.toString()).value
      }));
    });
  }

  private getQuestions(): void {
    this.questionService
    .getQuestions()
    .subscribe(questions => {
      this.questions = questions;
      this.initForm();
    })
  }

  private initForm(): void {
    let group: any = {};

    this.questions.forEach(question => {
      group[question.questionId] = question.required ? new FormControl(question.answer, Validators.required)
                                                     : new FormControl(question.answer);
    });
    this.questionsForm = new FormGroup(group);
  }
}
