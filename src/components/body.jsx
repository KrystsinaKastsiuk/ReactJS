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
        <img src="./components/images/meet_the_parents.jpg"/>
        <img src="./components/images/me_before_you.jpg"/>
        <img src="./components/images/bonnie_and_clyde.jpg"/>
        <img src="./components/images/notebook.jpg"/>
        <img src="./components/images/book_thief.jpg"/>
      </p>
    </div>
    );
  } 
}
  
  export default ReactComponent;