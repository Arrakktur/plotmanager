import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRepository } from './model/data.repository';
import { StaticDataSource } from './model/static.datasource';
import { FriendsComponent } from './pages/friends/friends.component';
import { HeaderComponent } from './components/header/header.component';;
import { ProjectModule } from './pages/projects/project.module';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectAddComponent } from './pages/project-add/project-add.component';
import { FormsModule } from '@angular/forms';
import { RestDataSourse } from './model/rest.service';
import { PersonAddComponent } from './pages/person-add/person-add.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FriendsComponent,
    HeaderComponent,
    ProjectDetailComponent,
    HomeComponent,
    PersonDetailComponent,
    AuthComponent,
    ProjectAddComponent,
    PersonAddComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "profile", component: ProfileComponent},
      { path: "project-detail", component: ProjectDetailComponent},
      { path: "friends", component: FriendsComponent},
      { path: "home", component: HomeComponent},
      { path: "person-detail", component: PersonDetailComponent},
      { path: "auth", component: AuthComponent},
      { path: "project-add", component: ProjectAddComponent},
      { path: "person-add", component: PersonAddComponent},
      { path: "projects", component: ProjectsComponent, canActivate: [AuthGuard]},
      { path: "**", redirectTo: "/home"},
    ])
  ],
  providers: [
    ProfileRepository,
    StaticDataSource,
    RestDataSourse,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
