import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../../modules/users';
import SearchResult from './body.jsx';

const mapStateToProps = state => ({
  users: state.users.items,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(SearchResult);
