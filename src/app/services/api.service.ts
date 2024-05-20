import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getAllCustomers() {
    return axios.get('http://localhost:8080/customers');
  }

  getAllOrders() {
    return axios.get('http://localhost:8080/orders');
  }

  getOrderByUserId(userId: string) {
    return axios.get(`http://localhost:8080/ordersByUserId?userId=${userId}`);
  }

  createOrder(order: any) {
    return axios.post('http://localhost:8080/orders', order);
  }

  // Order
  // {
  //   "id": 4,
  //   "userId": "user1",
  //   "items": ["item1", "item2", "item3"]
  // }
}
