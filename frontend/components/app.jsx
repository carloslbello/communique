import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpFormContainer from './sign_up_form_container';
import LogInFormContainer from './log_in_form_container';

const links = () => {
  return (
    <p>
      <Link to="/signup">Sign Up</Link> <Link to="/login">Log In</Link>
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Route path="/" exact render={links} />
      <Route path="/signup" component={SignUpFormContainer} />
      <Route path="/login" component={LogInFormContainer} />
    </div>
  );
};

export default App;
