import request from 'superagent'

const rootUrl = '/api/v1'

export function getPixels() {
  return request.get(rootUrl).then((res) => {
    return res.body.pixels
  })
}
