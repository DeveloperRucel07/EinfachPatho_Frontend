import { Component } from '@angular/core';
import { FormDisease } from "../../components/form-disease/form-disease";
import { DiseaseCard } from "../../components/disease-card/disease-card";
import { DB } from '../../db';
import { Sidebar } from "../../shared/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, MatIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  diseases = DB;
  

}
