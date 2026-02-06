import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule} from '@angular/material/dialog';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { Header } from "../../shared/header/header";
import { RegisterPayload, RegisterResponse } from '../../models/auth-models';
import { SnackbarService } from '../../services/snackbar';
import { AuthService } from '../../services/auth-service';

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
      agreeTerms: new FormControl(false, [Validators.requiredTrue])
    }, {validators: passwordsMatchValidator });
  
    type:string = 'password';
    hide = signal(true);
  
    constructor(private auth: AuthService, private snackbar: SnackbarService, private router: Router) {
  
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
    get agreeTerms(){
      return this.signupForm.get('agreeTerms');
    }
  
    submit(){
      if(!this.signupForm.valid){
        this.signupForm.markAllAsTouched();
        this.snackbar.error('Please fill out the form correctly.');
        return;
      }
  
      const registrationData: RegisterPayload = {
        username : this.name?.value || '',
        email : this.email?.value || '',
        password : this.password?.value || '',
        confirmed_password : this.confirmPassword?.value || '',
      };

      this.auth.register(registrationData).subscribe({
        next: (response : RegisterResponse) => {
          this.snackbar.success(response.detail);
          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.status === 0) {
            this.snackbar.error('Server is not reachable. Please try again later.');
          } else if (err.status === 400) {
            this.snackbar.error('Invalid registration data. Please check your input.');
          } else {
            this.snackbar.error('Something went wrong. Please try again.');
          }
        }
      });
  
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
