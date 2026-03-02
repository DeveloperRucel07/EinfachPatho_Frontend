import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiseasesService } from '../../services/diseases.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LoadingService } from '../../services/loading';
import { SnackbarService } from '../../services/snackbar';


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

  loading = inject(LoadingService)
  constructor(private diseaseService: DiseasesService, private router: Router, private snackbar: SnackbarService) {

  }

  submit() {
    if (this.diseaseForm.invalid) {
      this.diseaseForm.markAllAsTouched();
      return;
    }
    const prompt = this.diseaseForm.value.disease || '';
    this.generateDisease(prompt);
    this.diseaseForm.reset();
    this.loading.show();
  }


  generateDisease(prompt: string) {
    const payload = {
      prompt: prompt
    };

    this.diseaseService.createDisease(payload)
    .pipe(finalize(()=>this.loading.hide()))
    .subscribe({
      next: (response) => {
        this.snackbar.success("New disease generate with success:")
        this.router.navigate(['/disease', response.disease_id]);
      },
      error: (error) => {
        console.error("Error:", error);
        this.snackbar.error("Error during the genaration!")
      }
    });
  }
}
