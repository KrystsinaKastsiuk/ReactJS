import React, { Component } from 'react';
import * as actions from '../../../store/actions/actions';
import './filters.css';

const Filters = () => (
  <div className="additionalFilters">
    <form className="searchButtons">
      <p className="sortBy">Sort by</p>
      <button className="searchByReleaseDate" onClick={() => props.requestMovies({ param: 'sortBy', value: 'release_date' })}>Release date</button>
    </form>
    <form>
      <span className="searchBy">Search by</span>
      <button className="searchByTitle" name="Title" clicked={() => this.props.updateParameter('searchBy', 'title')}>Title</button>
      <button className="searchByGenre" name="Genre" clicked={() => this.props.updateParameter('searchBy', 'genres')}>Genre</button>
    </form>
  </div>
);

export default Filters;
