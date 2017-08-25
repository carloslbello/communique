export const fetchCommentsForPostId = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`
  });
};

export const postCommentForPostId = (postId, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${postId}/comments`,
    data: {
      comment
    }
  });
};
