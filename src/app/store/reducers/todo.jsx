const initialState = {
  query: {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    offset: 0,
  },
  extractedMovies: {},
  moviesSelected: false,
};

const showMovies = (state, action) => ({
  ...state,
  extractedMovies: action.movies,
});

const returnToSearch = state => ({
  ...state,
  moviesSelected: false,
});

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MOVIES': return showMovies(state, action);
    case 'RETURN_TO_SEARCH': return returnToSearch(state);
    default: return state;
  }
};

export default reducers;
