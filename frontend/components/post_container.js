import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/post_actions';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  postId: ownProps.match.params.postId
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
