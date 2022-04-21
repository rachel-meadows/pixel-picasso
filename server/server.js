const express = require('express')
const path = require('path')

const artworkRoutes = require('./routes/artwork')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/artwork', artworkRoutes)

module.exports = server
