import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtwork } from '../actions'
import hash from 'hash-string'
import { useParams } from 'react-router-dom'

function Artwork() {
  const { id } = useParams()
  const artwork = useSelector((state) => state.artwork)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchArtwork(id))
  }, [])

  console.log(artwork)

  return (
    <div className="container">
      <div className="artwork">
        {/* Outer container - 20x20 */}
        <h3 className="art-title">{artwork.title}</h3>
        <div className="canvas">
          {artwork?.pixels?.map((pixel) => (
            <div
              key={hash(pixel + Math.random())}
              style={{ backgroundColor: pixel }}
              className="canvas__pixel"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Artwork