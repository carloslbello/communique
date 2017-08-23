import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';

export default combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});
