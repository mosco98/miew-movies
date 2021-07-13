import { ActionTypes } from "../constants/action-types"

const initialState = {
  movies: []
}

const allMoviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload }

    default:
      return state
  }
}

export default allMoviesReducer
