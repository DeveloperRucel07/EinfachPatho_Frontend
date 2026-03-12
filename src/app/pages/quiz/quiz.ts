import { Component, computed, inject, Signal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiseasesService } from '../../services/diseases.service';
import { Disease, QuizType } from '../../models/disease-model';
import { Header } from "../../shared/header/header";
import { MatIconModule } from "@angular/material/icon";
import { QuizContent } from "./quiz-content/quiz-content";
import { QuizEngineService } from '../../services/quiz-service';

@Component({
  selector: 'app-quiz',
  imports: [MatIconModule, QuizContent],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {

  private route = inject(ActivatedRoute);
  private diseaseService = inject(DiseasesService);
  diseaseId:string = this.route.snapshot.paramMap.get('id') || '';
  disease = signal<Disease | null>(null);
  quizzes=  computed(() => this.disease()?.quizzes?.[0] ?? null);
  currentQuestionIndex = signal(0);
  selectedIndex: number | null = null;
  score = 0;
  showExplanation = false;

  constructor(public quizService: QuizEngineService){

  }

  ngOnInit() {
    this.diseaseService.getDiseaseById(this.diseaseId).subscribe({
      next: (data) => {
        this.disease.set(data);
      },
      error: (err) => {
        console.error('Error loading disease:', err);
      }
    });
  }

  nextQuestion() {
    const quiz = this.quizzes();
    if (!quiz) return;
    this.currentQuestionIndex.update(i =>
      Math.min(i + 1, quiz.questions.length - 1)
    );
  }

  previousQuestion() {
    this.currentQuestionIndex.update(i =>
      Math.max(i - 1, 0)
    );
  }



}
