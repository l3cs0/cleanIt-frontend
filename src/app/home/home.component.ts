import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  data: any;
  fetchData() {
    this.authService.fetchData().subscribe((response) => {
      this.data = response;
      console.log('Datablabla: ', this.data);
    });
  }
  fetchContainerData() {
    this.authService.fetchContainerData().subscribe((response) => {
      this.data = response;
      console.log('DatafromContainer: ', this.data);
    });
  }
}
