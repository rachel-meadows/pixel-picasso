import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPixels } from '../actions'
import hash from 'hash-string'
import Form from './Form'
import { HexColorPicker, HexColorInput } from 'react-colorful'

function Canvas() {
  // Initialisations and constants
  let currentlyDrawing = true
  const [gridSize, setGridSize] = useState(16)
  const [gridMemory, setGridMemory] = useState(
    Array(gridSize * gridSize).fill('#FFFFFFFF')
  )
  const [color, setColor] = useState('#000000')
  const [drawingType, setDrawingType] = useState('solid')

  function percentToHexHelper(percentage) {
    const percent = Math.max(0, Math.min(100, percentage))
    // Map percent to nearest integer (0 - 255)
    const intValue = Math.round((percent / 100) * 255)
    const hexValue = intValue.toString(16)
    return hexValue.padStart(2, '0').toUpperCase()
  }

  // Draw on the grid
  function handleHoverPen(event) {
    if (currentlyDrawing === true) {
      if (drawingType === 'solid') {
        gridMemory[Number(event.target.id)] = color
        event.target.style.backgroundColor = color
      } else {
        const percentageMultiplier = 10
        // Increment the 'data-hovercount' attribute and increase opacity by 10%
        const hoverCount = Number(event.target.getAttribute('data-hovercount'))
        event.target.setAttribute('data-hovercount', hoverCount + 1)
        const opacity = percentToHexHelper(
          (hoverCount + 1) * percentageMultiplier
        )
        event.target.style.backgroundColor = `${color}${opacity}`
        gridMemory[Number(event.target.id)] = `${color}${opacity}`
      }
    }
  }

  // Toggle pen on and off
  function handleClick() {
    if (currentlyDrawing === true) {
      currentlyDrawing = false
    } else {
      currentlyDrawing = true
    }
  }

  function changeDrawingType(event) {
    setDrawingType(event.target.id)
  }

  // Reset the grid
  function clearGrid() {
    console.log('gridsize 2', gridSize)
    setGridMemory(Array(gridSize * gridSize).fill('#FFFFFFFF'))
    document.querySelectorAll('.canvas__pixel').forEach((square) => {
      square.style.backgroundColor = '#FFFFFFFF'
    })
    setColor('#000000')
  }

  function resizeGrid() {
    let slider = document.getElementById('myRange')
    let output = document.getElementById('gridSize')
    output.innerHTML = slider.value // Display default slider value

    slider.oninput = function () {
      output.innerHTML = this.value // Display new slider value
      setGridSize(this.value)
    }
  }

  // Allows re-render at proper time
  useEffect(() => {
    clearGrid()
  }, [gridSize])

  return (
    <>
      <div className="container">
        <div className="input">
          <div>
            <HexColorPicker color={color} onChange={setColor} />
            <HexColorInput color={color} onChange={setColor} />
            <form id="opacityBlock">
              <p className="optionLabel">Opacity:</p>
              <div>
                <input
                  type="radio"
                  name="opacity"
                  value="Solid"
                  id="solid"
                  defaultChecked
                  onClick={changeDrawingType}
                />
                <label htmlFor="solid">Solid</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="opacity"
                  value="Fade"
                  id="fade"
                  onClick={changeDrawingType}
                />
                <label htmlFor="fade">Fade</label>
              </div>
            </form>
            <div id="sizeBlock">
              <div id="sizeContainer">
                <p className="optionLabel">Grid size:</p>
                <span id="gridSize"></span>
              </div>
              <div className="slidecontainer">
                <input
                  onChange={resizeGrid}
                  type="range"
                  min="5"
                  max="30"
                  value={gridSize}
                  className="slider"
                  id="myRange"
                />
              </div>
              <button id="clearGrid" onClick={clearGrid}>
                Clear
              </button>
              <p id="tip">
                <em>
                  <strong>Tip:</strong> Click the canvas to start or stop
                  drawing.
                </em>
              </p>
            </div>
          </div>

          <div className="input__column">
            <div
              className="input__canvas"
              style={{
                gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              }}
              onClick={handleClick}
            >
              {gridMemory.map((pixel, index) => (
                <div
                  key={hash(pixel + Math.random())}
                  id={index}
                  style={{ backgroundColor: pixel }}
                  className="canvas__pixel"
                  onMouseOver={handleHoverPen}
                  onTouchStart={handleHoverPen}
                  data-hovercount={0}
                ></div>
              ))}
            </div>
            <Form pixels={gridMemory} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Canvas
