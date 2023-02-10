import { Message } from '../model/message.model';
import { User } from '../model/user.model';

export interface ProfileState {
  user: User;
}

export interface MessageState {
  messages: Message[];
}

export interface AppState {
  profileState: ProfileState;
  messageState: MessageState;
}
