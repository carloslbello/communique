import { connect } from 'react-redux';
import { fetchCommentsForPostId, postCommentForPostId } from '../actions/comment_actions';
import { selectCommentsForPostId } from '../reducers/selectors';
import RequiredLoadConnect from '../util/required_load_connect';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => ({
  component: Comments,
  postId: ownProps.postId,
  resource: selectCommentsForPostId(state, ownProps.postId),
  mappedState: resource => ({
    comments: resource
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchCommentsForPostId(ownProps.postId)),
  mappedDispatch: {
    submit: comment => dispatch(postCommentForPostId(ownProps.postId, comment))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
