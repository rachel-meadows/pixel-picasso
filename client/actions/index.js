import { getSingleArtwork } from '../apis/artwork'

export const SET_ARTWORK = 'SET_ARTWORK'

export function setArtwork(artwork) {
  return {
    type: SET_ARTWORK,
    artwork,
  }
}

export function fetchArtwork(id) {
  return (dispatch) => {
    return getSingleArtwork(id).then((artwork) => {
      dispatch(setArtwork(artwork))
      return null
    })
  }
}
