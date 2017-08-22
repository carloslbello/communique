import { connect } from 'react-redux';
import { logInUser } from '../actions/user_actions';
import LogInForm from './log_in_form';

const mapDispatchToProps = dispatch => ({
  logInUser: user => dispatch(logInUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(LogInForm);
