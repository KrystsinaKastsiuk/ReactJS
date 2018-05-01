import React from 'react';
import './search.css';
import './images/search-icon.png';

const ReactComponent = () => {
  return (
    <div className="search">
      <form className="searchField">
        <h1 className="searchTitle">Find your movie</h1>
        <label>
          <input type="text" className="searchInput" placeholder="What do you need to find?" />
        </label>
        <button className="searchButton" type="submit">
          <img className="searchImage" src="./app/header/searchField/images/search-icon.png" alt="search" />
        </button>
      </form>
      <form className="searchButtons">
        <p className="searchBy">Search by</p>
        <button className="searchByTitle" type="submit">Title</button>
        <button className="searchByGenre" type="submit">Genre</button>
      </form>
    </div>
  );
};

export default ReactComponent;
