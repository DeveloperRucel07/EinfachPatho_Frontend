import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiseasesService } from '../../diseases.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Sidebar } from "../../shared/sidebar/sidebar";

@Component({
  selector: 'app-disease-detail',
  imports: [MatButtonModule, MatIconModule, Sidebar],
  templateUrl: './disease-detail.html',
  styleUrl: './disease-detail.scss',
})
export class DiseaseDetail {
  private route = inject(ActivatedRoute);
  private diseaseService = inject(DiseasesService);
  diseaseId = this.route.snapshot.paramMap.get('id') || '';

  disease = computed(() =>
    this.diseaseService.diseases()
      .find(d => d.disease_id === this.diseaseId)
  );
  


}
