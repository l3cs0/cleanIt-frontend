import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  login(): void {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    this.authService
      .login(email, password)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.log('Login Fehlgeschlagen');
        console.log(error);
      });
  }
}
