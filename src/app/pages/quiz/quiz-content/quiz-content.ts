import { Component, input, signal } from '@angular/core';
import { Question } from '../../../models/disease-model';

@Component({
  selector: 'app-quiz-content',
  imports: [],
  templateUrl: './quiz-content.html',
  styleUrl: './quiz-content.scss',
})
export class QuizContent {
  
  question = input.required<Question>();

}
