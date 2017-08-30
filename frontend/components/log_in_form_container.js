import { connect } from 'react-redux';
import { logInUser, logInDemoUser } from '../actions/user_actions';
import LogInForm from './log_in_form';

const mapDispatchToProps = dispatch => ({
  logInUser: user => dispatch(logInUser(user)),
  logInDemoUser: () => dispatch(logInDemoUser())
});

export default connect(
  null,
  mapDispatchToProps
)(LogInForm);
