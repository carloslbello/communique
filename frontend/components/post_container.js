import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/post_actions';
import { fetchCommentsForPostId } from '../actions/comment_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
  component: Post,
  resource: state.entities.posts[ownProps.match.params.postId],
  mappedState: resource => ({
    post: resource,
    postId: ownProps.match.params.postId,
    currentUserIsAuthor: resource.author_id === state.session.currentUser
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchCommentsForPostId(ownProps.match.params.postId)).then(dispatch(fetchPost(ownProps.match.params.postId))),
  mappedDispatch: {}
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect));
