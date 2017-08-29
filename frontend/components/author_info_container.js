import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import AuthorInfo from './author_info';

const mapStateToProps = (state, ownProps) => ({
  component: AuthorInfo,
  resource: state.entities.users[ownProps.userId],
  mappedState: resource => Object.assign({
    user: resource,
  }, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchUser(ownProps.userId)),
  mappedDispatch: {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
