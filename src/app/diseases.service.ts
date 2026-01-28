import { Injectable, signal } from '@angular/core';
import { DB } from './db';

@Injectable({
  providedIn: 'root',
})
export class DiseasesService {
  diseases = signal(DB);

  constructor() {}

}
