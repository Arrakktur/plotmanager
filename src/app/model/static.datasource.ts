import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { Project, ProjectList } from "./project.model";

/**
 * Заполнение данных
 */
@Injectable()
export class StaticDataSource {
    
    private profile: Profile;
    private projectList: ProjectList;

    constructor(){
        this.profile = new Profile('example.ru', 'password', 'MyName');
        this.projectList = new ProjectList([
            new Project('Название проекта 1', 'Описание проекта 1'),
            new Project('Название проекта 2', 'Описание проекта 2'),
            new Project('Название проекта 3', 'Описание проекта 3'),
            new Project('Название проекта 4', 'Описание проекта 4'),
            new Project('Название проекта 5', 'Описание проекта 5'),
            new Project('Название проекта 6', 'Описание проекта 6'),
            new Project('Название проекта 7', 'Описание проекта 7'),
            new Project('Название проекта 8', 'Описание проекта 8'),
            new Project('Название проекта 9', 'Описание проекта 9'),
            new Project('Название проекта 10', 'Описание проекта 10'),
        ]);
        console.log('start');
    }

    getProfile(): Profile{
        return this.profile;
    }

    getProjectList(): ProjectList{
        return this.projectList;
    }
}