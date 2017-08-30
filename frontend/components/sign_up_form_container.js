import { connect } from 'react-redux';
import { createUser, logInDemoUser } from '../actions/user_actions';
import SignUpForm from './sign_up_form';

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  logInDemoUser: () => dispatch(logInDemoUser())
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
