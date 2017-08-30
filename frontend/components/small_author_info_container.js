import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import RequiredLoadConnect from '../util/required_load_connect';
import SmallAuthorInfo from './small_author_info';

const mapStateToProps = (state, ownProps) => ({
  component: SmallAuthorInfo,
  resource: state.entities.users[ownProps.userId],
  mappedState: resource => ({
    user: resource,
    postCreatedDate: ownProps.postCreatedDate
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchUser(ownProps.userId)),
  mappedDispatch: {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
