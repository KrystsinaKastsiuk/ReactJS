import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './UsersPage.css';
import Users from '../../app/components/Users';
import Loader from '../../app/components/Loader';

class UsersPage extends PureComponent {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    users: [],
  };

  /**
   * componentWillMount was not useful for one-pass server rendering anyway
   * because it is synchronous so you can’t wait for the data.
   *
   * @link https://github.com/reactjs/reactjs.org/issues/727
   */
  // componentWillMount() {
  //   this.props.fetchUsers();
  // }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { loading, users } = this.props;
    return (
      <div>
        <h2 className={styles.title}>Users Page</h2>
        <Loader loading={loading} />
        <Users users={users} />
      </div>
    );
  }
}

export default UsersPage;
