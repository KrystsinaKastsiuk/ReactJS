import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './body.css';
// import meet_the_parents from '../images/meet_the_parents.jpg';
// import bonnie_and_clyde from '../images/bonnie_and_clyde.jpg';
// import me_before_you from '../images/me_before_you.jpg';
// import notebook from '../images/notebook.jpg';
// import book_thief from '../images/book_thief.jpg';

class SearchResult extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    users: [],
  };

  componentDidMount() {
    this.props.fetchUsers();
  }


  render() {
    const { loading, users } = this.props;

    return (
        <div className={styles.listMovies}>
          {this.props.children}
          <div className={styles.movies}>
            {/* NavLink вместо Link - для CSS */}
            {users.map(item => (
              <NavLink to={`/about/${item.id}`} activeClassName="active" key={item.id}>
                <p className={styles.listOfImagesContainer}><img src={item.img} alt={item.short} />{item.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
    );
  }
}

export default SearchResult;