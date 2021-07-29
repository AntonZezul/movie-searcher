import {
  movieDetailFailure,
  movieDetailRequest,
  movieDetailSuccess,
} from '../store/movieReducer';
import {
  getTotalResults,
  moviesRequest,
  previewMoviesFailure,
  previewMoviesSuccess,
  searchMovieFailure,
  searchMovieSuccess,
} from '../store/moviesReducer';

const API_KEY = '6c805f8b';

export const search = (searchValue, page = 1) => {
  return (dispatch) => {
    dispatch(moviesRequest());
    fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch(getTotalResults(jsonResponse.totalResults));
          dispatch(searchMovieSuccess(jsonResponse.Search));
        } else {
          dispatch(searchMovieFailure(jsonResponse.Error));
        }
      });
  };
};

export const fetchPreview = (page = 1) => {
  return (dispatch) => {
    dispatch(moviesRequest());
    fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}&page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === 'True') {
          dispatch(getTotalResults(json.totalResults));
          dispatch(previewMoviesSuccess(json.Search));
        } else {
          dispatch(previewMoviesFailure(json.Error));
        }
      });
  };
};

export const fetchMovies = (page) => {
  return (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=${page}`)
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
      .catch(() => dispatch(movieDetailFailure('Faild to fetch movie')));
  };
};
