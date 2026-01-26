import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-disease',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './form-disease.html',
  styleUrl: './form-disease.scss',
})
export class FormDisease {
  diseaseForm = new FormGroup({
    disease: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  submit() {
    if (this.diseaseForm.invalid) {
      this.diseaseForm.markAllAsTouched();
      return;
    }

    console.log(this.diseaseForm.value.disease);
  }


}
