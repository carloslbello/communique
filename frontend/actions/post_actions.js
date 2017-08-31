import * as PostsAPIUtil from '../util/posts_api_util';
import { receiveErrors, clearErrorsAnd } from './error_actions';
import { startLoading, endLoading } from './session_actions';

export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = postId => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.fetchPost(postId)
    .then(
      post => dispatch(clearErrorsAnd(receivePost(post))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const createPost = post => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.createPost(post)
    .then(
      post => dispatch(clearErrorsAnd(receivePost(post))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const editPost = (postId, post) => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.editPost(postId, post)
    .then(
      post => dispatch(clearErrorsAnd(receivePost(post))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const fetchFeedPostIds = () => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.fetchFeedPostIds()
    .error(errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors)))
    .always(() => dispatch(endLoading()));
};

export const likePost = postId => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.likePost(postId)
    .then(
      resultPost => dispatch(clearErrorsAnd(receivePost(resultPost))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const unlikePost = postId => dispatch => {
  dispatch(startLoading());
  return PostsAPIUtil.unlikePost(postId)
    .then(
      resultPost => dispatch(clearErrorsAnd(receivePost(resultPost))),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};
