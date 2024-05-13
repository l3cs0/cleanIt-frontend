import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('http://localhost:8080/greeting');
  }
  fetchContainerData() {
    return this.http.get('http://backend:8080/greeting');
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:8080/login', {
      email: email,
      password: password,
    });
  }

  register(
    email: string,
    name: string,
    password: string,
    passwordRepeat: string
  ) {
    return new Observable((observer) => {
      //call the API here
      setTimeout(() => {
        observer.next({
          email: email,
          name: name,
          password: password,
          passwordRepeat: passwordRepeat,
        });
      }, 1000);
    });
  }
}
