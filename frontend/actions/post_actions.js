import * as PostsAPIUtil from '../util/posts_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const fetchPost = postId => dispatch => {
  return PostsAPIUtil.fetchPost(postId)
    .then(
      post => dispatch(receivePost(post)),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    );
}

export const createPost = post => dispatch => {
  return PostsAPIUtil.createPost(post)
    .then(
      post => dispatch(receivePost(post)),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    );
}
