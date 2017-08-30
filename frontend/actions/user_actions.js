import * as UsersAPIUtil from '../util/users_api_util';
import * as SessionActions from './session_actions';
import { receiveErrors, clearErrors, clearErrorsAnd } from './error_actions';
import { startLoading, endLoading } from './session_actions';
export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const createUser = user => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.createUser(user)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
        dispatch(SessionActions.logInUser(resultUser.id));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const logInUser = user => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.logInUser(user)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
        dispatch(SessionActions.logInUser(resultUser.id));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const logOutUser = () => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.logOutUser()
    .then(
      () => dispatch(clearErrorsAnd(SessionActions.logOutUser())),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const fetchUser = userId => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.fetchUser(userId)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
}

export const updateUser = (userId, user) => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.updateUser(userId, user)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const followUser = userId => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.followUser(userId)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};

export const unfollowUser = userId => dispatch => {
  dispatch(startLoading());
  return UsersAPIUtil.unfollowUser(userId)
    .then(
      resultUser => {
        dispatch(clearErrors());
        dispatch(receiveUser(resultUser));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    ).always(() => dispatch(endLoading()));
};
