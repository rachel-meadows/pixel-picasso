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

  // db.getFruits()
  //   .then(results => {
  //     res.json({ fruits: results.map(fruit => fruit.name) })
  //     return null
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     res.status(500).json({ message: 'Somthing went wrong' })
  //   })
})

router.post('/', (req, res) => {
  db.addArtwork(req.body)
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
