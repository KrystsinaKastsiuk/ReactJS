import React from 'react';
import './search.css';
import Filters from './filters/filters';

const Search = () => (
  <div className="search">
    <input type="text" className="searchInput formControl" placeholder="Search for movies" />
    <span className="searchIcon" />
    <Filters />
  </div>
);

export default Search;
