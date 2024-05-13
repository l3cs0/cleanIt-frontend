import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  wasRegisteredSuccessfully: boolean = false;

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      passwordRepeat: new FormControl(''),
    });
  }

  register() {
    let email = this.registerForm.value.email;
    let name = this.registerForm.value.name;
    let password = this.registerForm.value.password;
    let passwordRepeat = this.registerForm.value.passwordRepeat;

    this.authService.register(email, name, password, passwordRepeat).subscribe({
      next: (response) => {
        console.log(response);
        this.wasRegisteredSuccessfully = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {}
}
