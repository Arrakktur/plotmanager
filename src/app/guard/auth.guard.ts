import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../servises/authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard{
 
    constructor(
        private auth: AuthenticationService,
        private router: Router,
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if(this.auth.authenticated) return true
        else {
            this.router.navigateByUrl('/auth');
            return false;
        } 
    }
}