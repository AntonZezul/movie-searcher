const defaultState = {
  loading: true,
  movies: [],
  error: null,
};

const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
const PREVIEW_MOVIES_SUCCESS = 'PREVIEW_MOVIES_SUCCESS';
const PREVIEW_MOVIES_FAILURE = 'PREVIEW_MOVIES_FAILURE';

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PREVIEW_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case PREVIEW_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SEARCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export const previewMoviesSuccess = (payload) => ({
  type: PREVIEW_MOVIES_SUCCESS,
  payload,
});

export const previewMoviesFailure = (error) => ({
  type: PREVIEW_MOVIES_FAILURE,
  error,
});

export const searchMovieRequest = () => ({
  type: SEARCH_MOVIES_REQUEST,
});

export const searchMovieSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
});

export const searchMovieFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  error,
});
