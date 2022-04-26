import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news = [
    {
      name: 'Обновление 0.0.3',
      description: 'Добавлена авторизация',
    },
    {
      name: 'Обновление 0.0.2',
      description: 'Добавлена детальная страница добавления и изменения персонажей',
    },
    {
      name: 'Обновление 0.0.1',
      description: 'Добавлена страница с проектами и их детальное редактирование',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
