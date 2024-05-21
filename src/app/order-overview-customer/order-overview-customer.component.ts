import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-order-overview-customer',
  templateUrl: './order-overview-customer.component.html',
  styleUrls: ['./order-overview-customer.component.css'],
})
export class OrderOverviewCustomerComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}
  public orders: any = [];

  ngOnInit(): void {
    if (this.authService.userId === null) {
      return;
    }
    this.apiService
      .getOrderByUserId(this.authService.userId)
      .then((response) => {
        this.orders = response.data;
      });
  }
}
