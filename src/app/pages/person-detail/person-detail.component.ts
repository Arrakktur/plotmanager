import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileRepository } from 'src/app/model/data.repository';
import { Person } from 'src/app/model/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  public name = '';
  public description = '';
  public avatarFile = '';

  public person: Person = new Person('', '');

  constructor(
    private repository: ProfileRepository,
    private activatedroute: ActivatedRoute,
  ) { 
      // id персонажа
      let personId = this.activatedroute.snapshot.queryParams['personId'];

      // получение персонажа
      this.repository.getPerson(personId).subscribe((data) => {
        let person = JSON.parse(data)[0];
        this.person = new Person(person.name, person.description, person.id);
      });
  }

  ngOnInit(): void {
  }

  // Загрузка файла
  uploadFile(): void {
    console.log(this.avatarFile);
  }

  // Отправка формы
  onSubmit(form: NgForm){
    console.log(form.controls);
  }
}
