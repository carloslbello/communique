import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser } from '../actions/user_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import FollowButton from './follow_button';

const mapStateToProps = (state, ownProps) => ({
  component: FollowButton,
  resource: state.entities.users[ownProps.userId].followed_by_current_user,
  required: state.session.currentUser !== null && state.session.currentUser !== ownProps.userId,
  mappedState: resource => ({
    isFollowed: resource
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchUser(ownProps.userId)),
  mappedDispatch: {
    follow: () => dispatch(followUser(ownProps.userId)),
    unfollow: () => dispatch(unfollowUser(ownProps.userId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
