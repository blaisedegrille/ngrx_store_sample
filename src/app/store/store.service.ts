import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../model/message.model';
import { User } from '../model/user.model';
import { ApiService } from '../service/api.service';
import {
  ResetMessagesAction,
  ResetProfileAction,
  SetMessagesAction,
  SetProfileAction,
} from './actions';
import { AppState } from './states';

@Injectable()
export class StoreService {
  userData$: Observable<User>;
  messageList$: Observable<Message[]>;

  constructor(private store: Store<AppState>) {
    this.userData$ = this.store.pipe(
      select((state) => state.profileState),
      select((profileState) => profileState.user)
    );

    this.messageList$ = this.store.pipe(
      select((state) => state.messageState),
      select((messageState) => messageState.messages)
    );
  }

  setUserData(user: User) {
    this.store.dispatch(new SetProfileAction(user));
  }

  resetUserData() {
    this.store.dispatch(new ResetProfileAction());
  }

  setMessageData(messages: Message[]) {
    this.store.dispatch(new SetMessagesAction(messages));
  }

  resetMessageData() {
    this.store.dispatch(new ResetMessagesAction());
  }
}
