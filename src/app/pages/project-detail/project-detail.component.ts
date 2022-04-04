import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project = new Project('Название проекта', 'Небольшое описание проекта');

  personList = [
    {
      name: 'Лили Джонсон',
      description: 'Небольшое описание. Мы можем видеть, как меняется отношение Толстого к Анне Карениной по мере развития сюжета. ' +
      'Автор представляет ее вульгарной, полной, несимпатичной.',    
      avatar: '../../../assets/img/person1.jpg'  
    },
    {
      name: 'Девид Джонсон',
      description: 'Мы можем видеть, как меняется отношение Толстого к Анне Карениной по мере развития сюжета. Автор представляет ее ' + 
      'вульгарной, полной, несимпатичной. Но далее Каренина предстает дамой с отменным вкусом, природным изяществом и живостью во взгляде.' + 
      ' Толстой почувствовал эмпатию к собственному персонажу, и образ Анны изменился.',      
      avatar: '../../../assets/img/person2.png'
    }
  ]

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigateToPersonDetail(){
    this.router.navigateByUrl('/person-detail');
  }
}
