import { AuthService } from './../../services/auth-service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private authAPI: AuthService) { }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.nullValidator]),
    password: new FormControl("", [Validators.required, Validators.nullValidator]),
  });

  handleSubmit() {
    console.log("submited")
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    if (!email || !password) return

    this.authAPI.login(email, password).subscribe({
      next: (data) => console.log(data),
      error: err => console.error(err)
    })
    console.log('Form data:', { email, password });

  }
}
