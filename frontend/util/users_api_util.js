export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const createUser = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const logInUser = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};
