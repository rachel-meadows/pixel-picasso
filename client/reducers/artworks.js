import { SET_ARTWORKS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTWORKS:
      return action.artworks
    default:
      return state
  }
}

export default reducer
