import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: {
    id: string;
    userId: string;
    notes: string;
    items: string[];
    userName: string;
  } = {
    id: '',
    userId: '',
    notes: '',
    items: [],
    userName: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
