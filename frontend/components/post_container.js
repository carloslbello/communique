import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/post_actions';
import { fetchCommentsForPostId } from '../actions/comment_actions';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  postId: ownProps.match.params.postId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPost: () => { dispatch(fetchCommentsForPostId(ownProps.match.params.postId)).then(dispatch(fetchPost(ownProps.match.params.postId))); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
