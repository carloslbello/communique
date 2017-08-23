import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import SignUpFormContainer from './sign_up_form_container';
import LogInFormContainer from './log_in_form_container';
import NewPostContainer from './new_post_container';
import PostContainer from './post_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const links = ({ loggedIn }) => {
  return loggedIn ? (
    <p>
      <Link to="/newpost">New Post</Link>
    </p>
  ) : (
    <p>
      <Link to="/signup">Sign Up</Link> <Link to="/login">Log In</Link>
    </p>
  );
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const linksContainer = connect(mapStateToProps)(links);

const App = () => {
  return (
    <div>
      <Route path="/" exact component={linksContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <ProtectedRoute path="/newpost" component={NewPostContainer} />
      <Route path="/posts/:postId" component={PostContainer} />
    </div>
  );
};

export default App;
