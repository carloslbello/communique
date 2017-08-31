import React from 'react';
import { Link } from 'react-router-dom';
import SmallAuthorInfoContainer from './small_author_info_container';

const PostInfo = ({ post }) => (
  <div className="post-info">
    <div className="post-info-hero-container">
      <Link to={`/posts/${post.id}`}>
        <div style={ { backgroundImage: `url(${post.hero_image_url ? post.hero_image_url : 'https://upload.wikimedia.org/wikipedia/commons/8/88/Roman_chainmail_detail.jpg' })` } } alt={post.title}/>
      </Link>
    </div>
    <div className="post-info-text">
      <div>
        <Link to={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.shown_summary}</p>
        </Link>
      </div>
      <SmallAuthorInfoContainer userId={post.author_id} createdDate={post.created_at} />
    </div>
  </div>
);

export default PostInfo;
