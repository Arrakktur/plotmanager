import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/project.model';
import { ProfileRepository } from 'src/app/model/data.repository';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {

  name: string = '';
  description: string = '';
  private projectId: number;

  constructor(
    private repository: ProfileRepository,
    private router: Router,
    private activatedroute: ActivatedRoute,
  ) { 
    // id проекта
    this.projectId = this.activatedroute.snapshot.queryParams['projectId'];
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.name === '' || this.description === ''){
      alert('Введены не все данные');
      return;
    }
    let person = new Person(this.name, this.description);
    this.repository.addPerson(person, this.projectId).subscribe((data) => {
      if(data){
        alert('Персонаж добавлен');
        this.router.navigateByUrl('/project-detail?projectId=1');
      } else {
        alert('Ошибка при добавлении персонажа, повторите попытку позже');
      }
    });
  }

}
