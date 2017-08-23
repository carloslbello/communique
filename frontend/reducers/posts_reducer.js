import { RECEIVE_POST } from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post });
    default:
      return state;
  }
};

export default PostsReducer;
