import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  users: UsersReducer,
  errors: ErrorsReducer,
  session: SessionReducer
});

export default RootReducer;
