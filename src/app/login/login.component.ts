import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _snackBar: MatSnackBar
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
        this.router.navigate(['']);
        this._snackBar.open(response.data, 'ok');
      })
      .catch((error) => {
        this._snackBar.open(error.response.data, 'ok');
      });
  }
}
