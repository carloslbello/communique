import { connect } from 'react-redux';
import { likePost, unlikePost } from '../actions/post_actions';
import Likes from './likes';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.session.currentUser,
  isLiked: state.entities.posts[ownProps.postId].liked_by_current_user,
  numLikes: state.entities.posts[ownProps.postId].num_likes,
  firstToLike: state.entities.posts[ownProps.postId].first_to_like
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  like: () => dispatch(likePost(ownProps.postId)),
  unlike: () => dispatch(unlikePost(ownProps.postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes);
