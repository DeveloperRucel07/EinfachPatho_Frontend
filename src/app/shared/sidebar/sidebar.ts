import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { User } from '../../models/auth-models';
import { AuthService } from '../../services/auth-service';
import { SnackbarService } from '../../services/snackbar';

@Component({
  selector: 'app-sidebar',
  imports: [ MatIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  user: User | null = null

  constructor(private auth: AuthService, private router: Router, private snackbar: SnackbarService) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  onLogout() {
    this.auth.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.snackbar.success('Logged out successfully.');
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }


}
