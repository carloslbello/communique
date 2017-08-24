import { connect } from 'react-redux'
import PostForm from './post_form';
import { createPost } from '../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  post: {
    title: '',
    content: []
  },
  submit: post => dispatch(createPost(post))
});

export default withRouter(connect(null, mapDispatchToProps)(PostForm));
