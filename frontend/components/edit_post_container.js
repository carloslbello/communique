import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, editPost } from '../actions/post_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => ({
  component: PostForm,
  resource: state.entities.posts[ownProps.match.params.postId],
  mappedState: resource => ({
    post: {
      title: resource.title,
      summary: resource.summary,
      content: resource.content,
      tagNames: resource.tag_names,
      heroImageUrl: resource.hero_image_url
    }
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchPost(ownProps.match.params.postId)),
  mappedDispatch: Object.assign({
    submit: post => dispatch(editPost(ownProps.match.params.postId, post))
  }, ownProps)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect));
