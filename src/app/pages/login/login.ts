
import { timer } from 'rxjs';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { Header } from "../../shared/header/header";
import { AuthService} from '../../services/auth-service';
import { LoginPayload, LoginResponse } from '../../models/auth-models';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, Header, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  type: string = 'password';
  hide = signal(true);
  errorMessage = '';

  loginForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  
  constructor(private auth: AuthService, private router: Router) {
    
  }

  showError(message: string) {
    this.errorMessage = message;
    timer(4000).subscribe(() => {
      this.errorMessage = '';
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginData: LoginPayload = {
      username : this.loginForm.get('username')!.value || '',
      password : this.loginForm.get('password')!.value || '',
    };


    this.auth.login(loginData).subscribe({
      next: (response: LoginResponse) => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        if (err.status === 0) {
          this.showError('Server is not reachable. Please try again later.');
        } else if (err.status === 400) {
          this.showError('Invalid username or password.');
        } else {
          this.showError('Something went wrong.');
        }
      }
    });
  
  }

  clickEvent(event: MouseEvent) {
    if (this.type === 'password') {
      this.type = 'text'
    } else {
      this.type = 'password';
    }
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}


