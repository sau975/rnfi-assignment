import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate() : boolean {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }

    return this.loginService.isAuthenticated();
  }

  canActivateChild() : boolean {
    return this.canActivate();
  }

}
