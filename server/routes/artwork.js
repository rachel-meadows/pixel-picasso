const express = require('express')

const db = require('../db/artwork')

const router = express.Router()

router.get('/', (req, res) => {

  db.getArtwork()
      .then(results => {
        res.json(results)
        return null
      })
      .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
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

module.exports = router
