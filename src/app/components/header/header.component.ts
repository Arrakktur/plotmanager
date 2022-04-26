import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSourse } from 'src/app/model/rest.service';
import { ProfileRepository } from 'src/app/model/data.repository';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

public isLogin: boolean;

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
    public router: Router,
    public rest: RestDataSourse,
    public repository: ProfileRepository,
  ) {
    this.isLogin = this.rest.auth_token !== '';

    // todo костыль, который нужно исправить
    setInterval(() => {
      this.isLogin = this.rest.auth_token !== '';
    }, 500);
  }

  ngOnInit(): void {
    
  }

  navigate(page: string): void{
    this.router.navigateByUrl(page);
  }

  logout(){
    this.rest.logout();
    this.navigate('/home');
  }
}
