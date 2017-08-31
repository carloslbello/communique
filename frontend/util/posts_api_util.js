export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  });
};

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {
      post
    }
  });
};

export const editPost = (postId, post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${postId}`,
    data: {
      post
    }
  });
};

export const fetchFeedPostIds = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed'
  });
};

export const searchWithQuery = query => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { query }
  });
};

export const likePost = postId => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${postId}/like`
  });
};

export const unlikePost = postId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}/like`
  });
};
