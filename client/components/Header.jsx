import React from 'react'

function Header() {
  return (
    <header>
      <ul className="nav__list">
        <li className="nav__list__title">Home</li>
      </ul>

      <h1 className="mainTitle">Pixel Picasso</h1>
      <ul className="nav__list">
        <li className="nav__list__title">Gallery</li>
        <li className="nav__list__title">About</li>
      </ul>
    </header>
  )
}

export default Header
