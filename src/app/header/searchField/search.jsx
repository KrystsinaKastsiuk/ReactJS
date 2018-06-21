import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './search.css';
import Filters from './filters/filters';
import * as actions from '../../../app/store/actions/actions';

const Search = () => (
  <div className="search">
    <input type="text" className="searchInput formControl" placeholder="Search for movies" />
    <span className="searchIcon" clicked={() => this.props.requestMovies(this.props.query)} name="Search"/>
    <Filters />
  </div>
);

export default Search;