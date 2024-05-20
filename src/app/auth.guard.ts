import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //TODO add matchnign role check (&& this.authService.userRole === 'admin')
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      // Redirect to login page or unauthorized page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
