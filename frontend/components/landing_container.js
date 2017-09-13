import { connect } from 'react-redux';
import Landing from './landing';

const mapStateToProps = state => ({
  landingPostIds: state.session.landingPostIds
});

export default connect(
  mapStateToProps
)(Landing);
