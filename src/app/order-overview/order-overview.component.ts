import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css'],
})
export class OrderOverviewComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  public orders: any = [];

  ngOnInit(): void {
    this.apiService.getAllOrders().then((response) => {
      this.orders = response.data;
    });
  }
}
