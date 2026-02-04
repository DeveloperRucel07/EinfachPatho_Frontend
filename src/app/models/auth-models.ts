export interface User {
  id: number;
  username: string;
  email: string;
}

export interface LoginResponse {
  detail: string;
  user: User;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  detail: string;
}

