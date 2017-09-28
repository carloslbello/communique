import { connect } from 'react-redux';
import { fetchFeedPostIds } from '../actions/post_actions';
import Feed from './feed';

const mapStateToProps = state => ({
  landingPostIds: state.session.landingPostIds
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPostIds: () => dispatch(fetchFeedPostIds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
