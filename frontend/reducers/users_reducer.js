import { RECEIVE_USER } from '../actions/user_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case LOGOUT_USER:
      const users = state;
      Object.keys(users).forEach(id => users[id].followed_by_current_user = null);
      return users;
    default:
      return state;
  }
};

export default UsersReducer;
