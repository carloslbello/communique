import { connect } from 'react-redux';
import { fetchPost } from '../actions/post_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import PostInfo from './post_info';

const mapStateToProps = (state, ownProps) => ({
  component: PostInfo,
  resource: state.entities.posts[ownProps.postId],
  mappedState: resource => ({
    post: resource
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchPost(ownProps.postId)),
  mappedDispatch: {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
