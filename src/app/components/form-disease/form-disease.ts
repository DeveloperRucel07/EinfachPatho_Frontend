import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiseasesService } from '../../services/diseases.service';
import { Router } from '@angular/router';


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

  constructor(private diseaseService: DiseasesService, private router: Router) {

  }

  submit() {
    if (this.diseaseForm.invalid) {
      this.diseaseForm.markAllAsTouched();
      return;
    }
    const prompt = this.diseaseForm.value.disease || '';
    this.generateDisease(prompt);
  }


  generateDisease(prompt: string) {
    const payload = {
      prompt: prompt
    };

    this.diseaseService.createDisease(payload).subscribe({
      next: (response) => {
        console.log("Disease generated successfully:", response);
        this.diseaseForm.reset();
        this.router.navigate(['/disease', response.disease_id]);
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
