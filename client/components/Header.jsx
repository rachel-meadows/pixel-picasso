import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <ul className="nav__list">
        <li className="nav__list__title">
          <Link to="/">Home</Link>
        </li>
      </ul>

      <h1 className="mainTitle">Pixel Picasso</h1>
      <ul className="nav__list">
        <li className="nav__list__title">
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
