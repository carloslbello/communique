export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const logInUser = userId => ({
  type: LOGIN_USER,
  userId
});

export const logOutUser = () => ({
  type: LOGOUT_USER
});

export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});
