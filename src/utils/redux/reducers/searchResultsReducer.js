import { ActionTypes } from "../constants/action-types"

const initialState = {
  searchResults: []
}

const searchResultsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_RESULTS:
      return { ...state, searchResults: payload }

    default:
      return state
  }
}

export default searchResultsReducer
