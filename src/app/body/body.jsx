import React from 'react';
import './body.css';
import './images/meet_the_parents.jpg';
import './images/bonnie_and_clyde.jpg';
import './images/me_before_you.jpg';
import './images/notebook.jpg';
import './images/book_thief.jpg';

const Body = () => (
  <div className="listMovies">
    <p className="movies">
      <img src="./app/body/images/meet_the_parents.jpg" alt="parents" />
      <img src="./app/body/images/me_before_you.jpg" alt="me before you" />
      <img src="./app/body/images/bonnie_and_clyde.jpg" alt="bonnie and clyde" />
      <img src="./app/body/images/notebook.jpg" alt="notebook" />
      <img src="./app/body/images/book_thief.jpg" alt="book" />
    </p>
  </div>
)

export default Body;
