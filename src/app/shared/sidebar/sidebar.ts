import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { User } from '../../models/auth-models';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  user: User | null = null

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

}
