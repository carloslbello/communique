import * as UsersAPIUtil from '../util/users_api_util';
import * as SessionActions from './session_actions';
import { receiveErrors } from './error_actions';
export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const createUser = user => dispatch => {
  return UsersAPIUtil.createUser(user)
    .then(
      resultUser => {
        dispatch(receiveUser(resultUser));
        dispatch(SessionActions.logInUser(resultUser.id));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    );
};

export const logInUser = user => dispatch => {
  return UsersAPIUtil.logInUser(user)
    .then(
      resultUser => {
        dispatch(receiveUser(resultUser));
        dispatch(SessionActions.logInUser(resultUser.id));
      },
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    );
};

export const logOutUser = () => dispatch => {
  return UsersAPIUtil.logOutUser()
    .then(
      () => dispatch(SessionActions.logOutUser()),
      errorResponse => dispatch(receiveErrors(errorResponse.responseJSON.errors))
    );
};
