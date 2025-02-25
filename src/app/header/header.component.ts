import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() logoSrc!: string;
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
