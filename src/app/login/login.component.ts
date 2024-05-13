import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.login(form);
      form.resetForm();
    }
  }

  login(form: any): void {
    let email = form.value.email;
    let password = form.value.password;

    this.authService
      .login(email, password)
      .then((response) => {
        this.router.navigate(['']);
        this._snackBar.open(response.data.message, 'ok');
      })
      .catch((error) => {
        this._snackBar.open(error.response.data.message, 'ok');
      });
  }
}
