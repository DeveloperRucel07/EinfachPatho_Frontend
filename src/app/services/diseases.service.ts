import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disease } from '../models/disease-model';

@Injectable({
  providedIn: 'root',
})
export class DiseasesService {
  API_BASE = 'http://localhost:8000/api'
  constructor( private http: HttpClient) {
     
  }

  getAllDiseases(): Observable<any> {
    return this.http.get<Disease[]>(`${this.API_BASE}/diseases/`, { withCredentials: true });
  }

  getDiseaseById(disease_id: string): Observable<any> {
    return this.http.get(`${this.API_BASE}/diseases/${disease_id}/`, { withCredentials: true });
  }

  createDisease(disease: any): Observable<any> {
    return this.http.post(`${this.API_BASE}/generate_disease/`, disease, { withCredentials: true });
  }



}
