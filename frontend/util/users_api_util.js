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

export const logOutUser = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const updateUser = (userId, user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { user }
  });
};
