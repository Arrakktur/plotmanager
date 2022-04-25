import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servises/authentication.service';
import { RestDataSourse } from 'src/app/model/rest.service';
import { Profile } from 'src/app/model/profile.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public login: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(
    private router: Router,
    private rest: RestDataSourse,
   // private auth: AuthenticationService,
  ) { }

  // Авторизация
  authenticate(form: NgForm){
    if (form.valid){
      let user = new Profile(this.login, this.password, '');
      this.rest.auth(user).subscribe((data) => {
        if (JSON.parse(data)[0] === null){
          this.errorMessage = "Ошибка получения токена";
          return;
        }
        let token = JSON.parse(data)[0].token;
        this.rest.auth_token = token;
        this.router.navigateByUrl('/projects');
      })
    }
    else {
      this.errorMessage = "Форма не валидна";
    }
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    this.authenticate(form);
  }

}
