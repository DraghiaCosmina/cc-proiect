import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { movieDeleteReducer, movieListReducer, movieSaveReducer } from './utils/reducer'

const initialState = {

};
const reducer = combineReducers({
    movieList: movieListReducer,
    movieSave: movieSaveReducer,
    movieDelete: movieDeleteReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore
    (reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;