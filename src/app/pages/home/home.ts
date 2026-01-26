import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormDisease } from "../../components/form-disease/form-disease";

@Component({
  selector: 'app-home',
  imports: [MatInputModule, MatButtonModule, FormDisease],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
