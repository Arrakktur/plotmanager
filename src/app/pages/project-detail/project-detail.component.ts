import { Component, OnInit } from '@angular/core';
import { Project, Person } from 'src/app/model/project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileRepository } from 'src/app/model/data.repository';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  public project: Project = new Project('', '');
  public personList: Person[] = [];
  private projectId: number;

  constructor(
    private router: Router,
    private repository: ProfileRepository,
    private activatedroute: ActivatedRoute
  ) {

    // id проекта
    this.projectId = this.activatedroute.snapshot.queryParams['projectId'];

    //Получаем проект
    this.repository.getProject(this.projectId).subscribe((data) => {
      let project = JSON.parse(data)[0];
      this.project = new Project(project.name, project.description, project.id);
    });

    // Получаем список персонажей
    this.repository.getPersonList(this.projectId).subscribe((data) => {
      JSON.parse(data).forEach((person: any) => {
        this.personList.push(new Person(person.name, person.description, person.id));
      })
    });
  }

  ngOnInit(): void {
  }

  navigateToPersonDetail(id: number | undefined){
    this.router.navigateByUrl(`/person-detail?personId=${id}`);
  }

  navigateToPersonAdd(){
    this.router.navigateByUrl(`/person-add?projectId=${this.projectId}`);
  }
}
