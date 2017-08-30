import { connect } from 'react-redux';
import { fetchFeedPostIds } from '../actions/post_actions';
import Feed from './feed';

const mapDispatchToProps = dispatch => ({
  fetchFeedPostIds: () => dispatch(fetchFeedPostIds())
});

export default connect(
  null,
  mapDispatchToProps
)(Feed);
