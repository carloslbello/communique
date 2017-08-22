import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';

const defaultState = {
  currentUser: null
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { currentUser: action.userId });
    case LOGOUT_USER:
      return Object.assign({}, state, { currentUser: null } );
    default:
      return state;
  }
};

export default SessionReducer;
