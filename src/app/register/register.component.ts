import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  wasRegisteredSuccessfully: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      passwordRepeat: new FormControl(''),
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.register(form);
      form.resetForm();
    }
  }

  register(form: any) {
    let email = form.value.email;
    let name = form.value.name;
    let password = form.value.password;
    let passwordRepeat = form.value.passwordRepeat;

    if (password !== passwordRepeat) {
      this._snackBar.open('Passwords do not match', 'ok');
      return;
    }

    this.authService
      .register(email, name, password)
      .then((response) => {
        console.log(response);
        this.wasRegisteredSuccessfully = true;
        this.router.navigate(['/login']);
        this._snackBar.open(response.data.message, 'ok');
      })
      .catch((error) => {
        console.log(error);
        this._snackBar.open(error.response.data.message, 'ok');
      });
  }

  ngOnInit(): void {}
}
