import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
