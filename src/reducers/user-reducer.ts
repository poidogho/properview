import { CREATE_USER } from '../actions/types';
import { UserState } from './types';

const initialState: UserState = {
  user: null
};

export function UserReducer(state = initialState, action: any) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload.user
      };

    default:
      return state;
  }
}
