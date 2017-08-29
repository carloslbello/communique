import React from 'react';
import Quill from 'quill';
import { UserLink } from '../util/route_util';
import { ReadableDate } from '../util/date_util';
import CommentForm from './comment_form';

const Comments = ({ postId, comments, submit }) => {
  const container = document.createElement('div');
  const quill = new Quill(container);
  const commentContents = comments.map(comment => {
    quill.setContents(comment.content);
    return (
      <li key={comment.id}>
        <b>On { ReadableDate(comment.created_at) }, <UserLink userId={comment.author_id}>{ comment.author_username }</UserLink> commented:</b>
        <br />
        <div dangerouslySetInnerHTML={ { __html: quill.container.querySelector('.ql-editor').innerHTML } } />
      </li>
    );
  });
  return (
    <div className="comments">
      <b>Comments</b>
      {commentContents.length === 0 ? <p className="faded">No comments yet.</p> : <ul>{commentContents}</ul> }
      <CommentForm postId={postId} submit={submit} />
    </div>
  )
}

export default Comments;