import { RECEIVE_POST } from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      const newPost = action.post;
      newPost.content = Object.values(action.post.content);
      return Object.assign({}, state, { [newPost.id]: newPost });
    default:
      return state;
  }
};

export default PostsReducer;
