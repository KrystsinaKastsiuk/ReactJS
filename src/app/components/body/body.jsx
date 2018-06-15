import React from 'react';
import { NavLink } from 'react-router-dom';
import './body.css';
import '../images/meet_the_parents.jpg';
import '../images/bonnie_and_clyde.jpg';
import '../images/me_before_you.jpg';
import '../images/notebook.jpg';
import '../images/book_thief.jpg';

class SearchResult extends React.Component {

  render() {
      return (
        <div className="listMovies">
          {this.props.children}
          <p className="movies">
            {/* NavLink вместо Link - для CSS */}
            <NavLink to="/about/meet_the_parents" activeClassName="active">
              <p className="listOfImagesContainer"><img src="./app/components/images/meet_the_parents.jpg" alt="parents" />Meet the parents</p>
            </NavLink>
            <NavLink to="/about/me_before_you">
              <p className="listOfImagesContainer"><img src="./app/components/images/me_before_you.jpg" alt="me before you" />Me before you</p>
            </NavLink>
            <NavLink to="/about/bonnie_and_clyde">
              <p className="listOfImagesContainer"><img src="./app/components/images/bonnie_and_clyde.jpg" alt="bonnie and clyde" />Bonnie and clyde</p>
            </NavLink>
            <NavLink to="/about/notebook">
              <p className="listOfImagesContainer"><img src="./app/components/images/notebook.jpg" alt="notebook" />Notebook</p>
            </NavLink>
            <NavLink to="/error">
              <p className="listOfImagesContainer"><img src="./app/components/images/book_thief.jpg" alt="book" />Error</p>
            </NavLink>
          </p>
        </div>
      );
  }
}

export default SearchResult;