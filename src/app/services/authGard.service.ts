import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    isLoggedIn: any = localStorage.getItem('arc-userDetails');
    profileDetails: any;
    isLogedIn: boolean = false;
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.profileDetails = localStorage.getItem('arc-userDetails');
        if (this.profileDetails != undefined || this.profileDetails != null) {
            return true;
        }
        if (this.profileDetails === undefined || this.profileDetails === null) {
            this.router.navigate(['/auth/login'])
            return false;
        }
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.profileDetails = localStorage.getItem('arc-userDetails');
        if (this.profileDetails != undefined || this.profileDetails != null) {
            return true;
        }
        if (this.profileDetails === undefined || this.profileDetails === null) {
            this.router.navigate(['/auth/login'])
            return false;
        }
    }
}