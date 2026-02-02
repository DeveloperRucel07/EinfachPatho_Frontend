import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface LoginResponse {
  detail: string;
  access: string;
  refresh: string;
  user: User;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

@Injectable({ 
  providedIn: 'root' 

})

export class AuthService {
  private http = inject(HttpClient);

  private readonly API_BASE = 'http://localhost:8000';
  private readonly loginUrl = `${this.API_BASE}/api/login/`;
  private readonly refreshUrl = `${this.API_BASE}/api/token/refresh/`;
  private readonly registerUrl = `${this.API_BASE}/api/register/`;

  private readonly accessKey = 'auth_access_token';
  private readonly refreshKey = 'auth_refresh_token';

  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, payload).pipe(
      tap(res => {
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
        localStorage.setItem('user', JSON.stringify(res.user));
    })
    );
  }

  register(payload: RegisterPayload): Observable<unknown> {
    return this.http.post(this.registerUrl, payload);
  }

  refreshToken(): Observable<{ access: string }> {
    const refresh = this.getRefreshToken();
    return this.http.post<{ access: string }>(this.refreshUrl, { refresh }).pipe(
      tap((res) => {
        if (res?.access) {
          this.setAccessToken(res.access);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshKey);
  }

  private storeTokens(tokens: LoginResponse): void {
    if (tokens?.access) {
      this.setAccessToken(tokens.access);
    }
    if (tokens?.refresh) {
      localStorage.setItem(this.refreshKey, tokens.refresh);
    }
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(this.accessKey, token);
  }
}
