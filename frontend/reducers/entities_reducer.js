import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer
});
