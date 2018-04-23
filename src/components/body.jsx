import React from 'react';
import './methods.css';

class ReactComponent extends React.Component {
    render() {
      return (
        <div className="listMovies">
            <h1 className="searchTitle">Find your movie</h1>
            <input className="searchField" placeholder="What do you need to find?"/>
            <p className="movies">
            <img src="./images/meet_the_parents.jpg"/>
            <img src="./images/bonnie_and_clyde.jpg"/>
            <img src="./images/me_before_you.jpg"/>
            <img src="./images/notebook.jpg"/>
            <img src="./images/book_thief.jpg"/>
            </p>
        </div>
      );
    }
  }
  
  export default ReactComponent;