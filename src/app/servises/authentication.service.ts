import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "../model/profile.model";
import { RestDataSourse } from "../model/rest.service";

@Injectable()
export class AuthenticationService {
    
    constructor(
        private rest: RestDataSourse,
    ) {
 
    }

    // Возвращает пройдена ли аутентификация
    get authenticated(): boolean {
        return this.rest.auth_token != '';
    }

    // Логаут
    clear(){
        this.rest.auth_token = '';
    }
}