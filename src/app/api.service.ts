import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Add your API call method here
  fetchData() {
    return this.http.get('http://localhost:8080/greeting');
  }
}
