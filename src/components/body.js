import React from 'react';
import './methods.css';

class ReactComponent extends React.Component {
    render() {
      return (
        <div className="listMovies">
            <h1 className="searchTitle">Find your movie</h1>
            <input className="searchField" placeholder="What do you need to find?"/>
            <p className="movies">
            <img src="meet_the_parents.jpeg"/>
            <img src="bonnie_and_clyde.jpg"/>
            <img src="me_before_you.jpg"/>
            <img src="notebook.jpg"/>
            <img src="book_thief.jpg"/>
            </p>
        </div>
      );
    }
  }
  
  export default ReactComponent;