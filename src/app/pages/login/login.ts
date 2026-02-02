
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { Header } from "../../shared/header/header";
import { AuthService, LoginPayload } from '../../services/auth-service';

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
  
  constructor(private auth: AuthService) {
    
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
      next: () => console.log('Login success'),
      error: err => console.error(err)
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


