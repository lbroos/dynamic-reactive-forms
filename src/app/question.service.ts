import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public getQuestions(): Observable<Question[]> {
    let questions: Question[] = [
      new Question({
        questionId: 1,
        question: 'Firstname',
        required: true,
        questiontype: 'open'
      }),
      new Question({
        questionId: 2,
        question: 'Lastname',
        required: true,
        questiontype: 'open'
      }),
      new Question({
        questionId: 3,
        question: 'Gender',
        questiontype: 'radio',
        possibleAnswers: ['Male', 'Female', 'Other']
      }),
      new Question({
        questionId: 4,
        question: 'Favorite day of the week',
        questiontype: 'radio',
        possibleAnswers: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']
      })
    ];

    return of(questions);
  }
  
}
