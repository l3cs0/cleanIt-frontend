import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn = false;
  userRole: string | null = null;

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
      console.log('trigger Loginflag');
      this.isLoggedIn = true;
      //TODO: assign user role to authService.userRole
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
    this.isLoggedIn = false;
    this.userRole = null;
    console.log('trigger Logoutflag');
    this.router.navigate(['login']);
  }
}
