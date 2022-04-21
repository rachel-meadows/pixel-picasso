import { getPixels } from '../apis/fruits'

export const SET_PIXELS = 'SET_PIXELS'

export function setPixels(pixels) {
  return {
    type: SET_PIXELS,
    fruits,
  }
}

export function fetchPixels() {
  return (dispatch) => {
    return getPixels().then((pixels) => {
      dispatch(setPixels(pixels))
      return null
    })
  }
}
