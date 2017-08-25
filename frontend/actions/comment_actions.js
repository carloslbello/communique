import * as CommentsAPIUtil from '../util/comments_api_util';
import { clearErrorsAnd, receiveErrors } from './error_actions';
import { startLoading, endLoading } from './session_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchCommentsForPostId = postId => dispatch => {
  dispatch(startLoading());
  return CommentsAPIUtil.fetchCommentsForPostId(postId)
    .then(
      comments => dispatch(clearErrorsAnd(receiveComments(comments))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const postCommentForPostId = (postId, comment) => dispatch => {
  dispatch(startLoading());
  return CommentsAPIUtil.postCommentForPostId(postId, comment)
    .then(
      comment => dispatch(clearErrorsAnd(receiveComment(comment))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};
