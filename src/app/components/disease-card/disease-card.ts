import { Component, computed, inject, input } from '@angular/core';
import { DiseasesService } from '../../diseases.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-disease-card',
  imports: [RouterModule],
  templateUrl: './disease-card.html',
  styleUrl: './disease-card.scss',
})


export class DiseaseCard {
  diseaseId = input.required<string>();

  private diseaseService = inject(DiseasesService);

  disease = computed(() =>
    this.diseaseService.diseases()
      .find(d => d.disease_id === this.diseaseId())
  );

}
