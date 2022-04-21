const connection = require('./connection')

function getArtwork (db = connection) {
  return db('artwork').select()
}

function addArtwork (art, db = connection) {
  return db('artwork').insert(art)
}

module.exports = {
  getArtwork,
  addArtwork
}
