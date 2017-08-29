import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import LoadingContainer from './loading_container';
import HeaderContainer from './header_container';
import ErrorsContainer from './errors_container';
import Landing from './landing';
import SignUpFormContainer from './sign_up_form_container';
import LogInFormContainer from './log_in_form_container';
import NewPostContainer from './new_post_container';
import EditPostContainer from './edit_post_container';
import PostContainer from './post_container';
import UserPageContainer from './user_page_container';
import UserFormContainer from './user_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <LoadingContainer />
      <HeaderContainer />
      <ErrorsContainer />
      <Route exact path="/" component={Landing} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <ProtectedRoute path="/newpost" component={NewPostContainer} />
      <Route exact path="/posts/:postId" component={PostContainer} />
      <ProtectedRoute exact path="/posts/:postId/edit" component={EditPostContainer} />
      <Route exact path="/users/:userId" component={UserPageContainer} />
      <ProtectedRoute exact path="/users/:userId/edit" component={UserFormContainer} />
    </div>
  );
};

export default App;
