const connection = require('./connection')

function getArtwork (db = connection) {
  return db('artwork').select()
}

module.exports = {
  getArtwork
}
