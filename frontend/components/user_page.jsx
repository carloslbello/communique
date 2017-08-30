import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from './follow_button_container';
import PostInfoContainer from './post_info_container';

const UserPage = ({ user, isCurrentUser }) => {
  let edit = null;
  if (isCurrentUser) edit = <Link to={`/users/${user.id}/edit`}>Edit your profile</Link>
  let bio = <p className="faded">This user hasn't written anything for their bio yet</p>;
  if (user.bio) bio = <p>{user.bio}</p>;
  let noPosts = null;
  let postInfos = null;
  if (user.post_ids.length === 0)
    noPosts = <p className="faded">This user hasn't posted anything yet.</p>
  else
    postInfos = <div className="posts-info-container">{user.post_ids.map(postId => <PostInfoContainer key={postId} postId={postId} />)}</div>;
  return (
    <div>
      <div className="user-page">
        <div className="user-avatar-container user-avatar-container-large">
          <img src={user.profile_picture_url ? user.profile_picture_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/500px-Checkerboard_pattern.svg.png'} alt={`${user.username}'s avatar`} />
        </div>
        <h1>{user.username}</h1>
        <FollowButtonContainer userId={user.id} />
        {bio}
        {edit}
        <h2>Posts</h2>
        {noPosts}
      </div>
      {postInfos}
    </div>
  )
};

export default UserPage;
