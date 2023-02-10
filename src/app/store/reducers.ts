import { MessageState, ProfileState } from './states';
import { User } from '../model/user.model';
import {
  AllMessageActions,
  AllProflieActions,
  MessageActionTypes,
  ProfileActionTypes,
} from './actions';

export const profileInitialState: ProfileState = {
  user: {
    completed: false,
    id: 0,
    title: 'default',
    userId: 0,
  },
};

export function profileReducer(
  state = profileInitialState,
  action: AllProflieActions
): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.SET:
      return {
        user: action.user,
      };
    case ProfileActionTypes.RES:
      return {
        user: profileInitialState.user,
      };

    default:
      return state;
  }
}

export const messageInitialState: MessageState = {
  messages: [
    {
      body: 'default',
      id: 0,
      title: 'default',
      userId: 0,
    },
  ],
};

export function messageReducer(
  state = messageInitialState,
  action: AllMessageActions
): MessageState {
  switch (action.type) {
    case MessageActionTypes.SET:
      return {
        messages: action.messages,
      };
    case MessageActionTypes.RES:
      return {
        messages: messageInitialState.messages,
      };

    default:
      return state;
  }
}
