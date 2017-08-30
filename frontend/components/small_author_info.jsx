import React from 'react';
import { UserLink } from '../util/route_util';
import { ReadableDate } from '../util/date_util';

const SmallAuthorInfo = ({ user, postCreatedDate }) => (
  <div className="author-info-small">
    <div className="user-avatar-container">
      <UserLink userId={user.id}>
        <img src={user.profile_picture_url ? user.profile_picture_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/500px-Checkerboard_pattern.svg.png'} alt={`${user.username}'s avatar`} />
      </UserLink>
    </div>
    <div className="text-info">
      <span><UserLink userId={user.id}>{user.username}</UserLink></span>
      <span>{ReadableDate(postCreatedDate)}</span>
    </div>
  </div>
);

export default SmallAuthorInfo;
