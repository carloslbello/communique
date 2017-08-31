import React from 'react';
import Quill from 'quill';''
import { ReadableDate } from '../util/date_util';
import SmallAuthorInfoContainer from './small_author_info_container';
import CommentForm from './comment_form';

const Comments = ({ postId, comments, submit, loggedIn }) => {
  const container = document.createElement('div');
  const quill = new Quill(container);
  const commentContents = comments.map(comment => {
    quill.setContents(comment.content);
    return (
      <li key={comment.id}>
        <SmallAuthorInfoContainer userId={comment.author_id} createdDate={comment.created_at} />
        <br />
        <div dangerouslySetInnerHTML={ { __html: quill.container.querySelector('.ql-editor').innerHTML } } />
      </li>
    );
  });
  return (
    <div className="comments">
      <b>Comments</b>
      {commentContents.length === 0 ? <p className="faded">No comments yet.</p> : <ul>{commentContents}</ul> }
      {loggedIn ? <CommentForm postId={postId} submit={submit} /> : <p>Log in to comment</p>}
    </div>
  )
}

export default Comments;
