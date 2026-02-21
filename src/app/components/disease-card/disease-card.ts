import { Component, computed, inject, input, signal } from '@angular/core';
import { DiseasesService } from '../../services/diseases.service';
import { RouterModule } from '@angular/router';
import { RouterLink } from "@angular/router";
import { Disease } from '../../models/disease-model';
@Component({
  selector: 'app-disease-card',
  imports: [RouterModule, RouterLink],
  templateUrl: './disease-card.html',
  styleUrl: './disease-card.scss',
})


export class DiseaseCard {
  diseaseId = input.required<string>();
  disease = signal<Disease | null>(null);
  fallbackImage = 'https://placehold.net/1.png'
  constructor(private diseaseService: DiseasesService) {

  }

  ngOnInit() {
    this.diseaseService.getDiseaseById(this.diseaseId()).subscribe({
      next: (data) => {
        this.disease.set(data);
      },
      error: (err) => {
        console.error('Error loading disease:', err);
      }
    });
  }

}
