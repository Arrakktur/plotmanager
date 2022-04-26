import { Injectable } from "@angular/core";
import { Project, Person } from "./project.model";
import { HttpClient } from '@angular/common/http';
import { Profile } from "./profile.model";
import { Observable, Subscriber } from "rxjs";

@Injectable()
export class RestDataSourse {
    // Токен аутентификации
    public auth_token: string = "";
    // public base_url: string = "http://91.201.254.176:2113/post";
    public base_url: string = "http://localhost:3000/post";

    constructor(private http: HttpClient){};

    // Логаут
    logout(){
        this.auth_token = '';
    }

    // Токен
    getToken(){

    }

    // Аутентификация
    auth(user: Profile){
        const request = this.http.post(
            this.base_url,
            'action=auth&data=' + JSON.stringify({user: user}),
            {headers: {'Content-type': 'application/x-www-form-urlencoded'},
            responseType: 'text'});
        return request;
    }

    // Запрос на получение проектов
    getProjects(){
        return this.sendRequest('getProjects');
    }

    // Запрос на получение проекта по id
    getProject(id: number){
        return this.sendRequest('getProject', {id: id});
    }

    // Запрос на добавление проекта
    addProject(project: Project){
        return this.sendRequest('addProject', {project});
    }

    // Запрос на получение списка персонажей
    getPersons(id: number){
        return this.sendRequest('getPersons', {id: id});
    }

    // Запрос на получение персонажа по id
    getPerson(id: number){
        return this.sendRequest('getPerson', {id: id});
    }

    // Добавление нового персонажа
    addPerson(person: Person, id: number){
        person.setId(id);
        return this.sendRequest('addPerson', {person});
    }

    // Отправляем запрос
    private sendRequest(action: string, data: any = {}, verb: string = 'post'){
        // Запрос
        let request;
        if (this.auth_token != ''){
            request = this.http.post(
                this.base_url,
                'action=' + action + 
                '&data=' + JSON.stringify(data),
                {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Accept-Language': 'ru',
                },
                responseType: 'text'});
        }else{
            request = this.http.post(
                this.base_url,
                'action=' + action + 
                '&data=' + JSON.stringify(data),
                {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Accept-Language': 'ru',
                    'Authorization': `Bearer<${this.auth_token}>`,
                },
                responseType: 'text'});
        }
        return request;
    }
}