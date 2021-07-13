import { combineReducers } from "redux"
import allMoviesReducer from "./allMoviesReducer"
import searchResultsReducer from "./searchResultsReducer"

const reducers = combineReducers({
  allMovies: allMoviesReducer,
  searchResults: searchResultsReducer
})

export default reducers
