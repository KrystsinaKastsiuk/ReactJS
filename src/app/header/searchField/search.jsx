import React from 'react';
import './search.css';
// import './images/search-icon.png';

const Search = () => (
  <div className="search">
    <input type="text" className="searchInput formControl" placeholder="Search for movies" />
    <span className="searchIcon" />

    {/* <form className="searchButtons">
      <p className="searchBy">Search by</p>
      <button className="searchByTitle" type="submit">Title</button>
      <button className="searchByGenre" type="submit">Genre</button>
    </form> */}
  </div>
);

export default Search;
