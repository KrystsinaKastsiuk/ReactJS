import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './body.css';
import meet_the_parents from '../images/meet_the_parents.jpg';
import bonnie_and_clyde from '../images/bonnie_and_clyde.jpg';
import me_before_you from '../images/me_before_you.jpg';
import notebook from '../images/notebook.jpg';
import book_thief from '../images/book_thief.jpg';

class SearchResult extends React.Component {

  render() {
      return (
        <div className={styles.listMovies}>
          {this.props.children}
          <p className={styles.movies}>
            {/* NavLink вместо Link - для CSS */}
            <NavLink to="/about/meet_the_parents" activeClassName="active">
              <p className={styles.listOfImagesContainer}><img src={meet_the_parents} alt="parents" />Meet the parents</p>
            </NavLink>
            <NavLink to="/about/me_before_you">
              <p className={styles.listOfImagesContainer}><img src={me_before_you} alt="me before you" />Me before you</p>
            </NavLink>
            <NavLink to="/about/bonnie_and_clyde">
              <p className={styles.listOfImagesContainer}><img src={bonnie_and_clyde} alt="bonnie and clyde" />Bonnie and clyde</p>
            </NavLink>
            <NavLink to="/about/notebook">
              <p className={styles.listOfImagesContainer}><img src={notebook} alt="notebook" />Notebook</p>
            </NavLink>
            <NavLink to="/error">
              <p className={styles.listOfImagesContainer}><img src={book_thief} alt="book" />Error</p>
            </NavLink>
          </p>
        </div>
      );
  }
}

export default SearchResult;