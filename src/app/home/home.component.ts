import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  data: any;
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
