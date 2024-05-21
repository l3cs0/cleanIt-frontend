import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent implements OnInit {
  users: any[] = [];
  items: string[] = [];

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {}

  addItem(): void {
    this.items.push('');
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    console.log(this.items);
  }

  ngOnInit(): void {
    this.apiService
      .getAllCustomers()
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        this._snackBar.open("Couldn't fetch users", 'ok');
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const order = this.transformObject(form);
      console.log('Form submitted successfully!');
      console.log('Form value:', order);
      this.apiService.createOrder(order).then((response) => {
        console.log(response);
        this._snackBar.open(
          'Order created successfully. ID: ' + response.data.id,
          'ok'
        );
      });
      form.resetForm();
    }
  }

  transformObject(form: NgForm): {
    userId: number;
    notes: string;
    items: string[];
  } {
    let items: string[] = [];
    for (let key in form.value) {
      if (key.startsWith('item-')) {
        items.push(form.value[key]);
        delete form.value[key];
      }
    }
    return { ...form.value, items, userId: +form.value.userId };
  }
}
