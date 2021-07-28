import {
  movieDetailFailure,
  movieDetailRequest,
  movieDetailSuccess,
} from '../store/movieReducer';
import {
  previewMoviesFailure,
  previewMoviesSuccess,
  searchMovieFailure,
  searchMovieRequest,
  searchMovieSuccess,
} from '../store/moviesReducer';

const API_KEY = '6c805f8b';

export const search = (searchValue) => {
  return (dispatch) => {
    dispatch(searchMovieRequest());
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch(searchMovieSuccess(jsonResponse.Search));
        } else {
          dispatch(searchMovieFailure(jsonResponse.Error));
        }
      });
  };
};

export const fetchPreview = () => {
  return (dispatch) => {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}&page=2`)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === 'True') {
          dispatch(previewMoviesSuccess(json.Search));
        } else {
          dispatch(previewMoviesFailure(json.Error));
        }
      });
  };
};

export const fetchMovie = (imdbID) => {
  return (dispatch) => {
    dispatch(movieDetailRequest);
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&plot=full`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then((json) => {
        dispatch(movieDetailSuccess(json));
      })
      .catch((err) => dispatch(movieDetailFailure('Faild to fetch movie')));
  };
};
