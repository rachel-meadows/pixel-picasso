import { SET_ARTWORK } from '../actions'

const initialState = {
  pixels: ['#000000'],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTWORK:
      return action.artwork
    default:
      return state
  }
}

export default reducer
