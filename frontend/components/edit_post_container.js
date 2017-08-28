import { connect } from 'react-redux';
import PostForm from './post_form';
import { editPost } from '../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  post: {
    id: ownProps.postId,
    title: state.entities.posts[ownProps.match.params.postId].title,
    summary: state.entities.posts[ownProps.match.params.postId].summary,
    content: state.entities.posts[ownProps.match.params.postId].content,
    tagNames: state.entities.posts[ownProps.match.params.postId].tag_names,
    heroImageUrl: state.entities.posts[ownProps.match.params.postId].hero_image_url
  }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: post => dispatch(editPost(ownProps.match.params.postId, post))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
