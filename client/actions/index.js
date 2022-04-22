import { getSingleArtwork, getArtwork, postArtwork } from '../apis/artwork'

export const SET_ARTWORK = 'SET_ARTWORK'
export const SET_ARTWORKS = 'SET_ARTWORKS'

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

export function sendArtwork(artwork) {
  return (dispatch) => {
    return postArtwork(artwork).then(() => {
      dispatch(fetchArtworks)
    })
  }
}

export function setArtworks(artworks) {
  return {
    type: SET_ARTWORKS,
    artworks,
  }
}

export function fetchArtworks() {
  return (dispatch) => {
    return getArtwork().then((artworks) => {
      dispatch(setArtworks(artworks))
      return null
    })
  }
}
