import { connect } from 'react-redux';
import Loading from './loading';

const mapStateToProps = state => ({
  loading: state.session.loading
});

export default connect(
  mapStateToProps
)(Loading);
