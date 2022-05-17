import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchArtworks } from '../actions'

function Gallery() {
  const artworks = useSelector((state) => state.artworks)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchArtworks())
  }, [])

  return (
    <>
      <div className="container, gallery__container">
        <div className="artwork">
          {artworks.map((artwork, id) => (
            <div key={id}>
              <Link to={`/${id + 1}`}>
                <h3 className="art-title">{artwork.title}</h3>
              </Link>
              <div
                className="canvas"
                style={{
                  gridTemplateRows: `repeat(${Math.sqrt(
                    artwork?.pixels?.length
                  )}, 1fr)`,
                  gridTemplateColumns: `repeat(${Math.sqrt(
                    artwork?.pixels?.length
                  )}, 1fr)`,
                }}
              >
                {artwork?.pixels?.map((pixel, pixelId) => (
                  <div
                    key={String(id) + String(pixelId)}
                    style={{ backgroundColor: pixel }}
                    className="canvas__pixel"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
