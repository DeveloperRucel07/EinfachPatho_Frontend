import { Injectable } from '@angular/core';
import { Quiz } from '../pages/quiz/quiz';
import { QuizType } from '../models/disease-model';
@Injectable({ providedIn: 'root' })
export class QuizEngineService {

  quiz!: QuizType;

  currentQuestionIndex = 0;
  answers: number[] = [];
  score = 0;

  startQuiz(quiz: QuizType) {
    this.quiz = quiz;
    this.currentQuestionIndex = 0;
    this.answers = new Array(quiz.questions.length).fill(null);
    this.score = 0;
  }

  get currentQuestion() {
    return this.quiz.questions[this.currentQuestionIndex];
  }

  selectAnswer(optionIndex: number) {
    this.answers[this.currentQuestionIndex] = optionIndex;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  previousQuestion() {
    this.currentQuestionIndex--;
  }

  calculateScore() {
    this.score = this.quiz.questions.reduce((total, question, index) => {
      return total + (this.answers[index] === question.correct_index ? 1 : 0);
    }, 0);
  }

  isFinished(): boolean {
    return this.currentQuestionIndex >= this.quiz.questions.length;
  }

  get progress() {
    return ((this.currentQuestionIndex + 1) / this.quiz.questions.length) * 100;
  }

}