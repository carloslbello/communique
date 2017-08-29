import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../actions/user_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  component: UserPage,
  resource: state.entities.users[ownProps.match.params.userId],
  mappedState: resource => ({
    user: resource,
    isCurrentUser: resource.id === state.session.currentUser
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchUser(ownProps.match.params.userId)),
  mappedDispatch: {}
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect));
