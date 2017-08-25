import React from 'react';
import Quill from 'quill';
import CommentForm from './comment_form';

const Comments = ({ postId, comments, submit }) => {
  const container = document.createElement('div');
  const quill = new Quill(container);
  const commentContents = comments.map(comment => {
    quill.setContents(comment.content);
    return <div key={comment.id} dangerouslySetInnerHTML={ { __html: quill.container.querySelector('.ql-editor').innerHTML } } />;
  });

  return (
    <div className="comments">
      <h4>Comments</h4>
      {commentContents.length === 0 ? "No comments yet." : commentContents}
      <CommentForm postId={postId} submit={submit} />
    </div>
  )
}

export default Comments;
