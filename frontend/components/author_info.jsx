import React from 'react';
import { UserLink } from '../util/route_util';
import { ReadableDate } from '../util/date_util';

const AuthorInfo = ({ user, postCreatedDate, postEditedDate }) => {
  let bio = null;
  if (user.bio) bio = <p>{user.bio}</p>;
  let dateInfo = `Posted ${ReadableDate(postCreatedDate)}`;
  if (postCreatedDate !== postEditedDate)
    dateInfo += ` \u2022 Edited ${ReadableDate(postEditedDate)}`;
  return (
    <div className="author-info">
      <div className="user-avatar-container">
        <UserLink userId={user.id}>
          <img src={user.profile_picture_url ? user.profile_picture_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/500px-Checkerboard_pattern.svg.png'} alt={`${user.username}'s avatar`} />
        </UserLink>
      </div>
      <div className="text-info">
        <p>By <UserLink userId={user.id}>{user.username}</UserLink></p>
        {bio}
        <p>{dateInfo}</p>
      </div>
    </div>
  )
};

export default AuthorInfo;
