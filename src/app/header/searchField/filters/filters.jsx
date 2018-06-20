import React, { Component } from 'react';
// import * as actions from '../../../store/actions/actions';
import styles from './filters.css';

const Filters = () => (
  <div className={styles.additionalFilters}>
    <form className={styles.searchButtons}>
      <p className={styles.sortBy}>Sort by</p>
      <button className={styles.searchByReleaseDate} onClick={() => props.requestMovies({ param: 'sortBy', value: 'release_date' })}>Release date</button>
    </form>
    <form>
      <span className={styles.searchBy}>Search by</span>
      <button className={styles.searchByTitle} name="Title" clicked={() => this.props.updateParameter('searchBy', 'title')}>Title</button>
      <button className={styles.searchByGenre} name="Genre" clicked={() => this.props.updateParameter('searchBy', 'genres')}>Genre</button>
    </form>
  </div>
);

export default Filters;
