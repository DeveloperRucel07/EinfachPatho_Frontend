import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule} from '@angular/material/dialog';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { Header } from "../../shared/header/header";

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
  selector: 'app-registration',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule,  MatError, MatIcon, Header, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {

  signupForm: FormGroup = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
      if(!this.signupForm.valid){
        console.log("check your form input")
        return;
      }
  
      const {name, email, password} = this.signupForm.value;
      console.log( name, email, password)
  
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
