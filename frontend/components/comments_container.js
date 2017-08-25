import { connect } from 'react-redux';
import { postCommentForPostId } from '../actions/comment_actions';
import { selectCommentsForPostId } from '../reducers/selectors';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId,
  comments: selectCommentsForPostId(state, ownProps.postId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: comment => dispatch(postCommentForPostId(ownProps.postId, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
