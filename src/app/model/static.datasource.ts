import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { RestDataSourse } from "./rest.service";
import { Observable } from "rxjs";
import { Person, Project } from "./project.model";

/**
 * Заполнение данных
 */
@Injectable()
export class StaticDataSource {
    
    private profile: Profile;

    constructor(
        private restDataSourse: RestDataSourse,
    ){
        this.profile = new Profile('example.ru', 'password', 'MyName');
    }

    // Возвращает профиль
    getProfile(): Profile{
        return this.profile;
    }

    // Возвращаем список заполненый проектов
    getProjectList(): Observable<string>{
        return this.restDataSourse.getProjects();
    }

    // Возвращаем список заполненый проектов
    getProject(id: number): Observable<string>{
        return this.restDataSourse.getProject(id);
    }

    // Добавление проекта
    addProject(project: Project): Observable<string>{
        return this.restDataSourse.addProject(project);
    }

    // Возвращает список персонажей
    getPersons(id: number): Observable<string>{
        return this.restDataSourse.getPersons(id);
    }

    // Возвращает персонажа по id
    getPerson(id: number): Observable<string>{
        return this.restDataSourse.getPerson(id);
    }

    // Добавление нового персонажа
    addPerson(person: Person, id: number): Observable<string>{
        return this.restDataSourse.addPerson(person, id);
    }
}