import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

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
    return axios.post(
      `http://localhost:8080/login?email=${email}&password=${password}`,
      {
        email: email,
        password: password,
      }
    );
  }

  register(id: number, email: string, name: string, password: string) {
    return axios.post(`http://localhost:8080/register`, {
      id: id,
      email: email,
      name: name,
      password: password,
    });
  }
}
