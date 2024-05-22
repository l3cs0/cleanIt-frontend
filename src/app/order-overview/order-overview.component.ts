import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  constructor(private apiService: ApiService) {}
  public orders: any = [];

  ngAfterViewInit() {
    if (this.input) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(500),
          distinctUntilChanged(),
          tap((text) => {
            //TODO put API call here
            if (this.input) console.log(this.input.nativeElement.value);
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
