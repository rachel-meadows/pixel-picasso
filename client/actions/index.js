import { getPixels } from '../apis/artwork'

export const SET_PIXELS = 'SET_PIXELS'

export function setPixels(pixels) {
  return {
    type: SET_PIXELS,
    pixels,
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
