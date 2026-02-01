
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { Header } from "../../shared/header/header";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, Header, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  type:string = 'password';
  hide = signal(true);

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const username = this.loginForm.get('name')
    const password = this.loginForm.get('password')
    console.log(username, password);
  }

  clickEvent(event: MouseEvent) {
    if(this.type === 'password'){
      this.type = 'text'
    }else{
      this.type = 'password';
    }
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}


