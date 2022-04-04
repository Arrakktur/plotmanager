import { Component } from '@angular/core';
import { Profile } from 'src/app/model/profile.model';
import { ProfileRepository } from 'src/app/model/data.repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    private repository: ProfileRepository
  ) {};

  get profile(): Profile{
    return this.repository.getProfile();
  }
}
