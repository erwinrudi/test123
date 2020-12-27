import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
  CanActivateChild,
  CanLoad
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { GeneralService } from "./general.service";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private generalService: GeneralService,
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // handle any redirects if a user isn't authenticated
    // console.log('Guard');
    if (!this.generalService.isAuthenticated()) {
      console.log('Access Denied');
      // Redirect to login page
      // this.router.navigate(['/login']);
      this.generalService.logout();
      return false;
    }
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canLoad(
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('Guard CanLoad');
    if (!this.generalService.isAuthenticated()) {
      // console.log('Access Denied');
      // Redirect to login page
      this.generalService.logout();
      return false;
    }
    return true;
  }
}
