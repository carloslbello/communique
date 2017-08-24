import { connect } from 'react-redux';
import { logOutUser } from '../actions/user_actions';
import Header from './header';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null,
  currentUser: state.session.currentUser === null ? null : state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
