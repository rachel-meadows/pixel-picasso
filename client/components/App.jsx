import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Canvas from './Canvas'
import Header from './Header'
import Artwork from './Artwork'
import Gallery from './Gallery'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/:id" element={<Artwork />} />
      </Routes>
    </>
  )
}

export default App
