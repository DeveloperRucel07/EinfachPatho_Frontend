import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { LoginPayload, LoginResponse, RegisterPayload, User } from '../models/auth-models';


@Injectable({ 
  providedIn: 'root' 

})

export class AuthService {
  private http = inject(HttpClient);

  private readonly API_BASE = 'http://localhost:8000';
  private readonly loginUrl = `${this.API_BASE}/api/login/`;
  private readonly myUrl = `${this.API_BASE}/api/auth/me/`;
  private readonly refreshUrl = `${this.API_BASE}/api/token/refresh/`;
  private readonly registerUrl = `${this.API_BASE}/api/register/`;


  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.loadUser()
  }

  loadUser() {
    return this.http.get<{ user: User }>(
      this.myUrl,
      { withCredentials: true }
    ).pipe(
      tap(res => this.userSubject.next(res.user)),
      map(res => res.user),
    catchError(() => {
        this.userSubject.next(null);
        return of(null);
      })
    );
  }

  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      this.loginUrl,
      payload,
      { withCredentials: true }
    );
  }

  checkAuth() {
    if (this.userSubject.value) {
      return of(true);
    }
    return this.loadUser().pipe(
      map(user => !!user)
    );
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  register(payload: RegisterPayload): Observable<unknown> {
    return this.http.post(this.registerUrl, payload);
  }


}

