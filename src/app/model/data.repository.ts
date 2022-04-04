import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { StaticDataSource } from "./static.datasource";
import { Project, ProjectList } from "./project.model";

/**
 * Репозиторий
 */
@Injectable()
export class ProfileRepository{
    private profile: Profile;
    private projectList: ProjectList;

    constructor(
        private dataSourse: StaticDataSource
    ){
        this.profile = this.dataSourse.getProfile();
        this.projectList = this.dataSourse.getProjectList();
    };

    getProfile(): Profile{
        return this.profile;
    }

    getProjectList(): ProjectList{
        return this.projectList;
    }

    removeProject(projectName: string): void{
        this.projectList.removeProjectName(projectName);
        console.log('2');
    }
}