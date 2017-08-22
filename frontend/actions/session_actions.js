export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const logInUser = userId => ({
  type: LOGIN_USER,
  userId
});

export const logOutUser = () => ({
  type: LOGOUT_USER
});
