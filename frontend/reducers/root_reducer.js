import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  errors: ErrorsReducer,
  session: SessionReducer
});

export default RootReducer;
