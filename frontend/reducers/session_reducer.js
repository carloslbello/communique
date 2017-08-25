import { LOGIN_USER, LOGOUT_USER, START_LOADING, END_LOADING } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  loading: false
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { currentUser: action.userId });
    case LOGOUT_USER:
      return Object.assign({}, state, { currentUser: null });
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    case END_LOADING:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default SessionReducer;
