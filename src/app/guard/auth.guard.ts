import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../servises/authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard{
 
    constructor(
       // private auth: AuthenticationService,
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // return this.auth.authenticated;
        return confirm('Вы уверен6ы что хотите перейти?');
    }
}