import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { PersonDetailComponent } from "../pages/person-detail/person-detail.component"

@Injectable()
export class ProjectGuard {
    private firstNavigation = true;

    constructor (
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.firstNavigation){
            this.firstNavigation = false;
            if (route.component != PersonDetailComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}