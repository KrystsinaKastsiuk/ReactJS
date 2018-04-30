import React from 'react';
import './methods.css';
import './images/meet_the_parents.jpg';
import './images/bonnie_and_clyde.jpg';
import './images/me_before_you.jpg';
import './images/notebook.jpg';
import './images/book_thief.jpg';

class ReactComponent extends React.Component {
  render() {
    return (
    <div className="listMovies">
      <h1 className="searchTitle">Find your movie</h1>
      <input className="searchField" placeholder="What do you need to find?"/>
      <p className="movies">
        <img src="./components/images/meet_the_parents.jpg" alt="parents"/>
        <img src="./components/images/me_before_you.jpg" alt="me before you"/>
        <img src="./components/images/bonnie_and_clyde.jpg" alt="bonnie and clyde"/>
        <img src="./components/images/notebook.jpg" alt="notebook"/>
        <img src="./components/images/book_thief.jpg" alt="book"/>
      </p>
    </div>
    );
  } 
}

export default ReactComponent;
