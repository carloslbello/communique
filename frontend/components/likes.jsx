import React from 'react';
import Pluralizer from '../util/plural_util.js';

const peoplePluralizer = Pluralizer('others', 'other person');

const Likes = ({ loggedIn, isLiked, numLikes, firstToLike, like, unlike }) => {
  let likeButton = null;
  if(loggedIn) {
    likeButton = isLiked ? (
      <div className="like-button liked pointer" onClick={unlike}>
        <i className="fa fa-thumbs-up fa-2x" />
      </div>
    ) : (
      <div className="like-button pointer" onClick={like}>
        <i className="fa fa-thumbs-up fa-2x" />
      </div>
    );
  }
  let blurb;

  if (numLikes === 0) {
    blurb = 'Nobody has liked this yet.'
    if(loggedIn) {
      blurb = blurb.concat(' Be the first!');
    }
  }

  if (numLikes === 1) {
    if (isLiked)
      blurb = 'You liked this.'
    else
      blurb = `${firstToLike} liked this.`
  }

  if (numLikes > 1) {
    const numLikesMinusOne = numLikes - 1;
    if (isLiked)
      blurb = `You and ${numLikesMinusOne} ${peoplePluralizer(numLikesMinusOne)} liked this.`
    else
      blurb = `${firstToLike} and ${numLikesMinusOne} ${peoplePluralizer(numLikesMinusOne)} liked this.`
  }

  return (
    <div className="likes">
      {likeButton}
      <span>{blurb}</span>
    </div>
  );

};

export default Likes;
