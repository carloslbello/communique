import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = ({ user, isCurrentUser }) => {
  let edit = null;
  if (isCurrentUser) edit = <Link to={`/users/${user.id}/edit`}>Edit your profile</Link>
  let bio = <p className="faded">This user hasn't written anything for their bio yet</p>;
  if (user.bio) bio = <p>{user.bio}</p>;
  return (
    <div className="user-page">
      <div className="user-avatar-container user-avatar-container-large">
        <img src={user.profile_picture_url ? user.profile_picture_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/500px-Checkerboard_pattern.svg.png'} alt={`${user.username}'s avatar`} />
      </div>
      <h1>{user.username}</h1>
      {bio}
      {edit}
    </div>
  )
};

export default UserPage;
