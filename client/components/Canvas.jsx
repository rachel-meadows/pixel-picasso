import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPixels } from '../actions'
import hash from 'hash-string'
import Form from './Form'
import { HexColorPicker, HexColorInput } from 'react-colorful'

function Canvas() {
  // Initialisations and constants
  let gridSize = 16
  let currentlyDrawing = true
  let opacityChoice = 1
  let colorChoice = '1, 1, 1, '
  let colorOpacityChoice = `rgba(${colorChoice + opacityChoice})`
  let cellCount = 0

  const [gridMemory, setGridMemory] = useState(
    Array(gridSize * gridSize).fill('#ffffff')
  )
  const [color, setColor] = useState('#000000')
  const [opacity, setOpacity] = useState('ff')

  // useEffect(() => {
  //   const audioName = Math.floor(Math.random() * 50)
  //   const audio = new Audio(`/music/piano-0${audioName}.mp3`)
  //   const newArray = [...pixels]
  //   newArray[pixel] = color
  //   setPixels(newArray)
  //   audio.play()
  // }, [pixel])

  ///
  ///
  // Content from 'Etch-a-sketch' to merge in:
  ///
  ///

  // Draw on the grid
  function handleHoverPen(event) {
    if (currentlyDrawing === true) {
      // const colorWithOpacity = `#${opacityChoice}${color.split(2)}`
      // cellCount += 0.2
      gridMemory[Number(event.target.id)] = color
      event.target.style.backgroundColor = color
      console.log('gridMemory: ', gridMemory)
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

  // Change pen to a new opacity level
  function handleOpacityChange(event) {
    if (event.target.text == 'fade') {
      opacityChoice = 0.1
    } else {
      opacityChoice = 1
    }
    colorOpacityChoice = `rgba(${colorChoice + opacityChoice})`
  }

  // Reset the grid
  function clearGrid() {
    setGridMemory(gridMemory.fill('#ffffff'))
    document.querySelectorAll('.canvas__pixel').forEach((square) => {
      square.style.backgroundColor = '#ffffff'
    })

    //   document.getElementById('black').checked = true
    //   document.getElementById('solid').checked = true
    //   opacityChoice = 1
    //   colorChoice = '1, 1, 1, '
    //   colorOpacityChoice = `rgba(${colorChoice + opacityChoice})`
    // })
  }

  function resizeGrid(event) {
    console.log(event.target.value)
    // slider.oninput = function () {
    //   gridMemorySize = this.value
    //   output.innerHTML = this.value // Display new slider value
    //   // Get rid of the old gridMemory
    //   container.querySelectorAll('*').forEach((n) => n.remove())
    //   // Make the new gridMemory
    //   enterActiveState(gridMemorySize)
    // }
  }

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
                  checked={true}
                  onChange={handleOpacityChange}
                />
                <label htmlFor="solid">Solid</label>
              </div>
              <div>
                <input type="radio" name="opacity" value="Fade" id="fade" />
                <label htmlFor="fade">Fade</label>
              </div>
            </form>
            <div id="sizeBlock">
              <div id="sizeContainer">
                <p className="optionLabel">Grid size:</p>
                <span id="gridSize"></span>
              </div>
              <div className="slidecontainer" onClick={handleClick}>
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
            >
              {gridMemory.map((pixel, index) => (
                <div
                  key={hash(pixel + Math.random())}
                  id={index}
                  style={{ backgroundColor: pixel }}
                  className="canvas__pixel"
                  onMouseOver={handleHoverPen}
                  onTouchStart={handleHoverPen}
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
