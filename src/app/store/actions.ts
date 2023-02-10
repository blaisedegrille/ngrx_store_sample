import { Action } from '@ngrx/store';
import { Message } from '../model/message.model';
import { User } from '../model/user.model';

export enum ProfileActionTypes {
  SET = '[Profile Component] Set to user',
  RES = '[Profile Component] Reset',
}

export class ResetProfileAction implements Action {
  readonly type = ProfileActionTypes.RES;
}

export class SetProfileAction implements Action {
  readonly type = ProfileActionTypes.SET;
  constructor(public readonly user: User) {}
}

export type AllProflieActions = ResetProfileAction | SetProfileAction;

export enum MessageActionTypes {
  SET = '[Message Component] Set to messages',
  RES = '[Message Component] Reset',
}

export class ResetMessagesAction implements Action {
  readonly type = MessageActionTypes.RES;
}

export class SetMessagesAction implements Action {
  readonly type = MessageActionTypes.SET;
  constructor(public readonly messages: Message[]) {}
}

export type AllMessageActions = ResetMessagesAction | SetMessagesAction;
