import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import HeaderContainer from './header_container';
import SignUpFormContainer from './sign_up_form_container';
import LogInFormContainer from './log_in_form_container';
import NewPostContainer from './new_post_container';
import PostContainer from './post_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <ProtectedRoute path="/newpost" component={NewPostContainer} />
      <Route path="/posts/:postId" component={PostContainer} />
    </div>
  );
};

export default App;
