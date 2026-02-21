import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiseasesService } from '../../services/diseases.service';
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
  diseaseId:string = this.route.snapshot.paramMap.get('id') || '';
  disease = signal<any>(null);
  print() {
      window.print();
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
  
}
