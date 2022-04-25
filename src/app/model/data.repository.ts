import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { StaticDataSource } from "./static.datasource";
import { Person, Project } from "./project.model";
import { Observable } from "rxjs";

/**
 * Репозиторий
 */
@Injectable()
export class ProfileRepository{
    private profile: Profile;
    private activeData = {
        project: 0,
    }

    constructor(
        private dataSourse: StaticDataSource
    ){
        this.profile = this.dataSourse.getProfile();
    };

    getProfile(): Profile{
        return this.profile;
    }

    // Установить активный проект
    setActiveProject(id: number): void{
        this.activeData.project = id;
    }

    // Отдаем список проектов
    getProjectList(): Observable<string>{
        return this.dataSourse.getProjectList();
    }

    // Отдаем проект по id
    getProject(id: number): Observable<string>{
        return this.dataSourse.getProject(id);
    }

    // Добавление проекта
    addProject(project: Project): Observable<string>{
        return this.dataSourse.addProject(project);
    }

    // Отдаем список персонажей
    getPersonList(id: number): Observable<string>{
        return this.dataSourse.getPersons(id);
    }

    // Отдаем список персонажей
    getPerson(id: number): Observable<string>{
        return this.dataSourse.getPerson(id);
    }

    // Добавление нового персонажа 
    addPerson(person: Person, id: number): Observable<string>{
        return this.dataSourse.addPerson(person, id);
    }
}