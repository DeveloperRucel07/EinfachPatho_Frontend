import { Component } from '@angular/core';
import { FormDisease } from "../../components/form-disease/form-disease";
import { DiseaseCard } from "../../components/disease-card/disease-card";
import { DB } from '../../db';
import { Sidebar } from "../../shared/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/auth-models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, MatIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  diseases = DB;
  user: User | null = null

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }



}
