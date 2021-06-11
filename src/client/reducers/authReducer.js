import { FETCH_CURRENT_USER, FETCH_USERS_LOGIN } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    case FETCH_USERS_LOGIN:
      return { ...state, token: action.payload};
    default:
      return state;
  }
}