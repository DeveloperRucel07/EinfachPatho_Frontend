import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-home',
  imports: [MatInputModule, MatButtonModule, MatIconModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
