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

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FriendsComponent,
    HeaderComponent,
    ProjectDetailComponent,
    HomeComponent,
    PersonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    RouterModule.forRoot([
      { path: "projects", component: ProjectsComponent},
      { path: "profile", component: ProfileComponent},
      { path: "project-detail", component: ProjectDetailComponent},
      { path: "friends", component: FriendsComponent },
      { path: "home", component: HomeComponent},
      { path: "person-detail", component: PersonDetailComponent},
      { path: "**", redirectTo: "/home"},
    ])
  ],
  providers: [
    ProfileRepository,
    StaticDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
