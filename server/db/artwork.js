const connection = require('./connection')

function getArtwork (db = connection) {
  return db('artwork').select()
}

function addArtwork (art, db = connection) {
  return db('artwork').insert(art)
}

function getSingleArtWork(id, db = connection) {
  return db('artwork').where('id', id).select()
}

module.exports = {
  getArtwork,
  addArtwork,
  getSingleArtWork,
}
