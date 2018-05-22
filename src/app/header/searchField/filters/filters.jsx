import React from 'react';
import './filters.css';


const Filters = () => (
  <div className="additionalFilters">
    <form className="searchButtons">
      <p className="searchBy">Search by</p>
      <button className="searchByTitle" type="submit">Title</button>
      <button className="searchByGenre" type="submit">Genre</button>
    </form>
  </div>
);

export default Filters;
