import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css'],
})
export class OrderOverviewComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;
  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {}
  public orders: any = [];

  ngAfterViewInit() {
    if (this.input) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(500),
          distinctUntilChanged(),
          tap((text) => {
            if (this.input) {
              this.apiService
                .getOrdersByUserName(this.input.nativeElement.value)
                .then((response) => {
                  this._snackBar.open(
                    `Orders for '${this.input?.nativeElement.value}' fetched successfully`,
                    'ok',
                    {
                      duration: 1000,
                    }
                  );
                  this.orders = response.data;
                });
            }
          })
        )
        .subscribe();
    }
  }

  ngOnInit(): void {
    this.apiService.getAllOrders().then((response) => {
      this.orders = response.data;
    });
  }
}
