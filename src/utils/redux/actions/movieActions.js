import { ActionTypes } from "../constants/action-types"

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies
  }
}

export const setSearchResults = (results) => {
  return {
    type: ActionTypes.SET_SEARCH_RESULTS,
    payload: results
  }
}

export const setLikes = (likes) => {
  return {
    type: ActionTypes.SET_LIKES,
    payload: likes
  }
}

export const setDislikes = (dislikes) => {
  return {
    type: ActionTypes.SET_DISLIKES,
    payload: dislikes
  }
}
