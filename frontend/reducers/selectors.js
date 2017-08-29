export const selectCommentsForPostId = (state, postId) => {
  const comments = state.entities.posts[postId].comment_ids.map(comment_id => state.entities.comments[comment_id]);
  if (comments.includes(undefined)) return null;
  return comments;
};
