import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  // TODO set to false
  isLoggedIn = true;
  // TODO set to null
  userRole: string | null = 'Employee';

  fetchData() {
    return this.http.get('http://localhost:8080/greeting');
  }
  fetchContainerData() {
    return this.http.get('http://backend:8080/greeting');
  }

  login(email: string, password: string) {
    let res = axios.post(
      `http://localhost:8080/login?email=${email}&password=${password}`,
      {
        email: email,
        password: password,
      }
    );

    res.then((response) => {
      this.isLoggedIn = true;
      this.userRole = response.data.role;
    });

    return res;
  }

  register(email: string, name: string, password: string) {
    return axios.post(`http://localhost:8080/register`, {
      email: email,
      name: name,
      password: password,
    });
  }

  logout() {
    let res = axios.post(`http://localhost:8080/logout`);
    res.then((response) => {
      this.isLoggedIn = false;
      this.userRole = response.data.role;
    });
    this.router.navigate(['login']);
  }
}
