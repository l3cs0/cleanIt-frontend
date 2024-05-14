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
  // public orders = [
  //   {
  //     id: '1',
  //     userId: '1',
  //     items: ['item1', 'item2', 'item3'],
  //   },
  //   {
  //     id: '2',
  //     userId: '2',
  //     items: ['item4', 'item5', 'item6'],
  //   },
  //   {
  //     id: '3',
  //     userId: '3',
  //     items: ['item7', 'item8', 'item9'],
  //   },
  // ];

  ngOnInit(): void {
    this.apiService.getAllOrders().then((response) => {
      this.orders = response.data;
    });
  }
}
