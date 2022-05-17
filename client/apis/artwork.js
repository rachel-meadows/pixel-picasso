import request from 'superagent'

const rootUrl = '/api/v1/'

export function getArtwork() {
  return request.get(rootUrl + 'artwork').then((res) => {
    return res.body
  })
}

export function getSingleArtwork(id) {
  console.log(id)
  return request.get(rootUrl + 'artwork/' + id).then((res) => {
    console.log(res.body)
    return res.body
  })
}

export function postArtwork(artworks) {
  return (request.post (rootUrl + 'artwork').send(artworks))
}