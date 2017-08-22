import { connect } from 'react-redux';
import { createUser } from '../actions/user_actions';
import SignUpForm from './sign_up_form';

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
