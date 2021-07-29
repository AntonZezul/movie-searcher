const defaultState = {
  loading: true,
  movies: [],
  error: null,
  page: 1,
  totalResults: '',
};

const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
const MOVIES_REQUEST = 'MOVIES_REQUEST';
const PREVIEW_MOVIES_SUCCESS = 'PREVIEW_MOVIES_SUCCESS';
const PREVIEW_MOVIES_FAILURE = 'PREVIEW_MOVIES_FAILURE';
const SET_MOVIE_PAGE = 'SET_MOVIE_PAGE';
const GET_TOTAL_RESULTS = 'GET_TOTAL_RESULTS';

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case PREVIEW_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case PREVIEW_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SET_MOVIE_PAGE:
      return { ...state, page: action.payload };
    case GET_TOTAL_RESULTS:
      return { ...state, totalResults: action.payload };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export const getTotalResults = (payload) => ({
  type: GET_TOTAL_RESULTS,
  payload,
});

export const setMoviePage = (payload) => ({
  type: SET_MOVIE_PAGE,
  payload,
});

export const moviesRequest = (payload) => ({
  type: MOVIES_REQUEST,
  payload,
});
export const previewMoviesSuccess = (payload) => ({
  type: PREVIEW_MOVIES_SUCCESS,
  payload,
});

export const previewMoviesFailure = (error) => ({
  type: PREVIEW_MOVIES_FAILURE,
  error,
});

export const searchMovieSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
});

export const searchMovieFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  error,
});
