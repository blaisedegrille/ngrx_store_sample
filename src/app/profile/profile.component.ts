import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ApiService } from '../service/api.service';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  radio: number;
  choices: number[] = [1, 2, 3];

  constructor(readonly store: StoreService, readonly service: ApiService) {
    this.store.userData$.subscribe((data) => (this.user = data));
  }

  ngOnInit() {}

  onClick() {
    this.service.getUserData(this.radio).toPromise();
    this.service.getMessageData().toPromise();
  }

  async reset() {
    this.store.resetMessageData();
    this.store.resetUserData();
  }
}
