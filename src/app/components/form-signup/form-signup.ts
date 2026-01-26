import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatError, MatLabel, MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule} from '@angular/material/dialog';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from "@angular/router";

export function passwordsMatchValidator() : ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
      if(password && confirmPassword && password !== confirmPassword){
        return {
          passwordDontMatch: true,
        }
      }
      return null;
  };
}


@Component({
  selector: 'app-form-signup',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatFormField, MatLabel, MatError, MatIcon, RouterLink],
  templateUrl: './form-signup.html',
  styleUrl: './form-signup.scss',
})
export class FormSignup {

  signupForm: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {validators: passwordsMatchValidator });

  type:string = 'password';
  hide = signal(true);

  constructor(){

  }

  get name(){
    return this.signupForm.get('name');
  }
  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }

  submit(){

  }

  openLogin(){
    
    
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
