import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

menuItems = [
  {
    name: 'Домашняя',
    link: '/home'
  },
  {
    name: 'Сообщения',
    link: '/messages'
  },
  {
    name: 'Подписки',
    link: '/friends'
  },
  {
    name: 'Проекты',
    link: '/projects'
  }
]

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
