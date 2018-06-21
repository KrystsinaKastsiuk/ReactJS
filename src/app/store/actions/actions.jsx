import axios from 'axios';
import { store } from '../../../index';

export const updateParameter = (parameter, value) => {
  return {
    type: 'UPDATE_PARAMETER',
    parameter,
    value,
  };
};

export const showMovies = movies => ({
  type: 'SHOW_MOVIES',
  movies,
});

export const requestMovies = updatedParameter => (dispatch) => {
  if (updatedParameter) dispatch(updateParameter(updatedParameter.parameter, updatedParameter.value));
  if (updatedParameter.parameter !== 'offset') dispatch(updateParameter('offset', 0));

  const params = Object.entries(store.getState().query);

  axios.get(`http://react-cdp-api.herokuapp.com/movies?${params}`).then(res => dispatch(showMovies(res.data)));
};

export const SHOW_MOVIES = 'SHOW_MOVIES';
export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';
export const RETURN_TO_SEARCH = 'RETURN_TO_SEARCH';
