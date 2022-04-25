import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProfileRepository } from 'src/app/model/data.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  name: string = '';
  description: string = '';

  constructor(
    private repository: ProfileRepository,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.name === '' || this.description === ''){
      alert('Введены не все данные');
      return;
    }
    let project = new Project(this.name, this.description);
    this.repository.addProject(project).subscribe((data) => {
      if(data){
        alert('Проект добавлен');
        this.router.navigateByUrl('/projects');
      } else {
        alert('Ошибка при добавлении проекта, повторите попытку позже');
      }
      
    });
  }
}
