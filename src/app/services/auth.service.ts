import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  // TODO set initially to false
  isLoggedIn = false;
  // TODO set initially to null
  userRole: string | null = null;
  // TODO set initially to null
  userName: string | null = null;
  // TODO set initially to null
  userId: number | null = null;

  login(email: string, password: string) {
    let res = axios.post(`http://localhost:8080/login`, {
      email: email,
      password: password,
    });

    res.then((response) => {
      this.isLoggedIn = true;
      this.userRole = response.data.role;
      this.userName = response.data.name;
      this.userId = response.data.userId;
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
      this.userName = response.data.name;
    });
    this.router.navigate(['login']);
  }
}
