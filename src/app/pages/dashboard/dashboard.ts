import { Component, OnInit } from '@angular/core';
import { FormDisease } from "../../components/form-disease/form-disease";
import { DiseaseCard } from "../../components/disease-card/disease-card";
import { DB } from '../../db';
import { Sidebar } from "../../shared/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/auth-models';

import { Observable, pipe } from 'rxjs';
import { RouterLink } from "@angular/router";
import { DiseasesService } from '../../services/diseases.service';
import { Disease } from '../../models/disease-model';
@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, MatIcon, FormDisease, DiseaseCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard  implements OnInit {
  diseases: Disease[] = [];
  loading = true;
  user: User | null = null
  fallbackImage = 'https://placehold.net/1.png'

  constructor(private auth: AuthService, private diseaseService: DiseasesService) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.loadDiseases();
  }

  loadDiseases() {
    this.diseaseService.getAllDiseases().subscribe({
      next: (data) => {
        this.diseases = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading diseases:', err);
        this.loading = false;
      }
    });
  }



}
