import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(email = "", password = "") {
    return this.http.post("http://localhost:3000/auth/users/login", { email, password })
  }
}
