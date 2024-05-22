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

  getOrderByUserId(userId: number) {
    return axios.get(`http://localhost:8080/ordersByUserId?userId=${userId}`);
  }

  createOrder(order: any) {
    return axios.post('http://localhost:8080/order', order);
  }

  getOrdersByUserName(userName: string) {
    return axios.get(
      `http://localhost:8080/ordersByUserName?userName=${userName}`
    );
  }
}
