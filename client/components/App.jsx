import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Canvas from './Canvas'
import Header from './Header'
import AboutPage from './AboutPage'
import Artwork from './Artwork'

function App() {
  console.log('hi')
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Canvas />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:id" element={<Artwork />} />
      </Routes>
    </>
  )
}

export default App
