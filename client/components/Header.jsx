import React from 'react'

function Header() {
  return (
    <header>
      <h1 className="mainTitle">Pixel Picasso</h1>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__list__title">Home</li>
          <li className="nav__list__title">Gallery</li>
          <li className="nav__list__title">About</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
