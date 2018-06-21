import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserById } from '../../../modules/users';
import About from './about.jsx';

const mapStateToProps = (state, props) => ({
  user: state.users.current,
  id: props.match.params.id,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
