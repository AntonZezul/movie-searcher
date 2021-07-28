const defaultState = {
    loading: true,
    movie: {},
    movieId: '',
    error: null
  };
  
  const GET_MOVIE_ID = 'GET_MOVIE_DESC';
  const MOVIE_DETAILS_REQUEST = 'MOVIE_DETAILS_REQUEST';
  const MOVIE_DETAILS_SUCCESS = 'MOVIE_DETAILS_SUCCESS';
  const MOVIE_DETAILS_FAILURE = 'MOVIE_DETAILS_FAILURE';
  
  export const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_MOVIE_ID:
        return { ...state, loading: false, movieId: action.payload };
      case MOVIE_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case MOVIE_DETAILS_SUCCESS:
        return { ...state, loading: false, movie: action.payload };
      case MOVIE_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };

  export const getMovieId = (payload) => ({
    type: GET_MOVIE_ID,
    payload,
  });
  
  export const movieDetailRequest = () => ({
    type: MOVIE_DETAILS_REQUEST,
  });
  
  export const movieDetailSuccess = (payload) => ({
    type: MOVIE_DETAILS_SUCCESS,
    payload,
  });
  
  export const movieDetailFailure = (error) => ({
    type: MOVIE_DETAILS_FAILURE,
    error,
  });
  