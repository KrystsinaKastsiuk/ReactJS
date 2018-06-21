import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './search.css';
import Filters from './filters/filters';
// import * as actions from '../../../app/store/actions/actions';

const Search = () => (
  <div className={styles.search}>
    <input type="text" className={styles.searchInput} placeholder="Search for movies" />
    <span className={styles.searchIcon} clicked={() => this.props.requestMovies(this.props.query)} name="Search"/>
    <Filters />
  </div>
);

export default Search;