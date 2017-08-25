import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT:
      const newComment = action.comment;
      newComment.content = Object.values(action.comment.content);
      return Object.assign({}, state, { [newComment.id]: newComment });
    case RECEIVE_COMMENTS:
      const newComments = Object.assign({}, action.comments);
      Object.keys(newComments).forEach(commentId => newComments[commentId].content = Object.values(action.comments[commentId].content));
      return Object.assign({}, state, newComments);
    default:
      return state;
  }
}

export default CommentsReducer;
