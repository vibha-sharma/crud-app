import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { loginService } from './login/login-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router, private loginService: loginService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }
   checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn && localStorage.getItem('userDetail')) {
      return true; 
    }
    this.loginService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
