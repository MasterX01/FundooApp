import { AuthGuardService } from './services/auth-guard.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthGuardService, private router: Router) {}
  canActivate(): boolean {
      if (!this.Authguardservice.gettoken()) {
          this.router.navigateByUrl('login');
      }
      return this.Authguardservice.gettoken();
  }

}
