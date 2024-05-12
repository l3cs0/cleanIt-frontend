import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CleanIt-Frontend';

  data: any;

  constructor(private apiService: ApiService) {}

  fetchData() {
    this.apiService.fetchData().subscribe((response) => {
      this.data = response;
      console.log('Datablabla: ', this.data);
    });
  }
  fetchContainerData() {
    this.apiService.fetchContainerData().subscribe((response) => {
      this.data = response;
      console.log('DatafromContainer: ', this.data);
    });
  }
}
