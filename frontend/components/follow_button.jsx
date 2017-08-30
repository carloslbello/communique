import React from 'react';

const FollowButton = ({ isFollowed, follow, unfollow }) => {
  return isFollowed ? (
    <div className="follow-button followed pointer" onClick={unfollow}>
      Unfollow
    </div>
  ) : (
    <div className="follow-button pointer" onClick={follow}>
      Follow
    </div>
  );
};

export default FollowButton;
