import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPixels } from '../actions'
import hash from 'hash-string'
import Form from './Form'
import { HexColorPicker, HexColorInput } from 'react-colorful'

function Canvas() {
  const dispatch = useDispatch()
  useEffect(() => {}, [])

  const [pixels, setPixels] = useState(Array(400).fill('#ffffff'))

  const [colour, setColour] = useState('#000000')

  function handleClick(event) {
    const newArray = [...pixels]
    newArray[event.target.id] = colour
    setPixels(newArray)
  }

  return (
    <>
      <div className="container">
        <div className="input">
          <div>
            <HexColorPicker color={colour} onChange={setColour} />
            <HexColorInput color={colour} onChange={setColour} />
          </div>

          <div className="input__column">
            <div className="input__canvas">
              {pixels.map((pixel, index) => (
                <div
                  key={hash(pixel + Math.random())}
                  id={index}
                  style={{ backgroundColor: pixel }}
                  className="canvas__pixel"
                  // onDragEnter={handleClick}
                  onDragOver={handleClick}
                  draggable={true}
                ></div>
              ))}
            </div>
            <Form pixels={pixels} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Canvas
