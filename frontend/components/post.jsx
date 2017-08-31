import React from 'react';
import Quill from 'quill';
import { Link } from 'react-router-dom';
import AuthorInfoContainer from './author_info_container';
import LikesContainer from './likes_container';
import CommentsContainer from './comments_container';

const Post = ({ post, postId, currentUserIsAuthor }) => {
  if (!post) return null;

  let hero = null;

  if(post.hero_image_url) hero = (
    <div className="hero-image-container">
      <img src={post.hero_image_url} />
    </div>
  );

  let edit = null;

  if(currentUserIsAuthor) edit = <Link to={`/posts/${postId}/edit`}>Edit</Link>;
  // Ugly hack that works: Create an invisible Quill editor,
  // give it the post's contents, and grab its HTML

  const container = document.createElement('div');
  const quill = new Quill(container);
  quill.setContents(post.content);
  const postHTML = quill.container.querySelector('.ql-editor').innerHTML;

  const tagLis = post.tag_names.map(tag_name => <li key={tag_name}>{tag_name}</li>);

  return (
    <div className="post">
      <AuthorInfoContainer userId={post.author_id} postCreatedDate={post.created_at} postEditedDate={post.updated_at} />
      <h1>{post.title}</h1>
      {hero}
      <div dangerouslySetInnerHTML={ { __html: postHTML } } />
      <ul className="tags">
        {tagLis}
      </ul>
      <LikesContainer postId={postId} />
      {edit}
      <CommentsContainer postId={postId} />
    </div>
  )
}

export default Post;
