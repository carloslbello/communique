import React from 'react';
import PostInfoContainer from './post_info_container';

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="communique-img-large" />
        <h1>Welcome to Communique!</h1>
        <p>Communique is a place for people to speak their mind and be heard.</p>
        <p>Check out some featured posts:</p>
      </div>
      <div className="posts-info-container">
        { window.landingPostIds.map(postId => <PostInfoContainer key={postId} postId={postId} />) }
      </div>
    </div>
  )
};

export default Landing;
