import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-form-login',
  imports: [MatDialogModule, MatFormFieldModule, MatError, ReactiveFormsModule, MatInput, MatButton, MatIcon],
  templateUrl: './form-login.html',
  styleUrl: './form-login.scss',
})
export class FormLogin {
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
    console.log(this.loginForm.value);
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

