import React from 'react';
import { UserLink } from '../util/route_util';
import { ReadableDate } from '../util/date_util';
import FollowButtonContainer from './follow_button_container';

const AuthorInfo = ({ user, postCreatedDate, postEditedDate }) => {
  let bio = null;
  if (user.bio) bio = <span>{user.bio}</span>;
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
        <span>By <UserLink userId={user.id}>{user.username}</UserLink> <FollowButtonContainer userId={user.id} /></span>
        {bio}
        <span>{dateInfo}</span>
      </div>
    </div>
  )
};

export default AuthorInfo;
