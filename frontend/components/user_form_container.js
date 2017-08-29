import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, updateUser } from '../actions/user_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
  component: UserForm,
  resource: state.entities.users[ownProps.match.params.userId],
  mappedState: resource => ({
    user: resource
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchUser(ownProps.match.params.userId)),
  mappedDispatch: Object.assign({
    submit: user => dispatch(updateUser(ownProps.match.params.userId, user))
  }, ownProps)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect));
