const { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_SAVE_REQUEST, MOVIE_SAVE_SUCCESS, MOVIE_SAVE_FAIL, MOVIE_DELETE_REQUEST, MOVIE_DELETE_SUCCESS, MOVIE_DELETE_FAIL, MOVIE_DELETE_RESET } = require("./constants");

export const movieListReducer = (state = { loading: true, movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true };
    case MOVIE_LIST_SUCCESS:
      return { loading: false, movies: action.payload };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export const movieSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_SAVE_REQUEST:
      return {loading:true }
    case MOVIE_SAVE_SUCCESS:
      return { loading: false, saveMovie: action.payload }
    case MOVIE_SAVE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state;
  }

}
export const movieDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DELETE_REQUEST:
      return { loading: true };
    case MOVIE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MOVIE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case MOVIE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};