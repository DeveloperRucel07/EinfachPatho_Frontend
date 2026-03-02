import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  load$ = false

  show() {
    this.loadingSubject.next(true);
    this.load$ = true
  }

  hide() {
    this.loadingSubject.next(false);
    this.load$ = false
  }
}