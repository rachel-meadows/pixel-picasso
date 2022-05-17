const express = require('express')

const db = require('../db/artwork')

const router = express.Router()

router.get('/', (req, res) => {
  db.getArtwork()
    .then((results) => {
      const newData = results.map((item) => {
        return {
          ...item,
          pixels: JSON.parse(item.pixels),
        }
      })
      res.json(newData)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// get single artwork, return object
router.get('/:id', (req, res) => {
  db.getSingleArtWork(Number(req.params.id))
    .then((results) => {
      console.log(results)
      const newData = results.map((item) => {
        return {
          ...item,
          pixels: JSON.parse(item.pixels),
        }
      })
      res.json(newData[0])
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const { title, pixels } = req.body
  const stringifyPixels = JSON.stringify(pixels)

  db.addArtwork({ title, pixels: stringifyPixels })
    .then((id) => {
      res.json(id)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
