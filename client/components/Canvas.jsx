import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPixels } from '../actions'
import hash from 'hash-string'
import Form from './Form'

function Canvas() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPixels())
  }, [])

  const [pixels, setPixels] = useState(Array(400).fill('#ffffff'))

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleClick(event) {
    const colour = '#007080'
    const newArray = [...pixels]
    newArray[event.target.id] = colour
    setPixels(newArray)
  }

  return (
    <>
      <div className="container">
        {/* Outer container - 20x20 */}
        <div className="canvas">
          {pixels.map((pixel, index) => (
            <div
              key={hash(pixel + Math.random())}
              id={index}
              style={{ backgroundColor: pixel }}
              className="canvas__pixel"
              onClick={handleClick}
              draggable={true}
            ></div>
          ))}
        </div>
      </div>
      <Form pixels={pixels} />
    </>
  )
}

export default Canvas
