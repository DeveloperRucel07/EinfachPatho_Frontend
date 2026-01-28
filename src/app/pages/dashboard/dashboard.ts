import { Component } from '@angular/core';
import { FormDisease } from "../../components/form-disease/form-disease";
import { DiseaseCard } from "../../components/disease-card/disease-card";
import { DB } from '../../db';
@Component({
  selector: 'app-dashboard',
  imports: [FormDisease, DiseaseCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  diseases = DB;
  

}
