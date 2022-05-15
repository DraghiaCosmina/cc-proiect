import Axios from 'axios';
import { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_SAVE_REQUEST, MOVIE_SAVE_SUCCESS, MOVIE_SAVE_FAIL, MOVIE_LIST_SUCCESS, MOVIE_DELETE_REQUEST, MOVIE_DELETE_SUCCESS, MOVIE_DELETE_FAIL } from "./constants.js"


export const listMovies = () => async (dispatch) => {
    dispatch({
        type: MOVIE_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get('/movies');
        dispatch({
            type: MOVIE_LIST_SUCCESS, payload: data
        })

    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL, payload: error.message
        })

    }
}

export const saveMovie = (movieId, movieTitle, moviePathPoster) => async (dispatch, getState) => {
    dispatch({ type: MOVIE_SAVE_REQUEST, payload: { movieId, movieTitle, moviePathPoster } });
    try {



        const { data } = await Axios.post('/movies', { movieId, movieTitle, moviePathPoster })

        dispatch({ type: MOVIE_SAVE_SUCCESS, payload: data });


    } catch (error) {
        dispatch({
            type: MOVIE_SAVE_FAIL, payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const deleteMovie = (movieId) => async (dispatch, getState) => {
    dispatch({ type: MOVIE_DELETE_REQUEST, payload: movieId });

    try {
        await Axios.delete(`/movies/${movieId}`, {
            movieId

        });
        dispatch({ type: MOVIE_DELETE_SUCCESS });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: MOVIE_DELETE_FAIL, payload: message });
    }
};