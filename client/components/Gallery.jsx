import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

function Gallery() {
    // const artwork = useSelector((state) => state.artwork)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(fetchArtwork())
    // }, [])

    const artworkMock = [{id: 1, title: 'hello', pixels: Array(400).fill('#ffffff')}, 
    {id: 2, title: 'hello 2', pixels: Array(400).fill('#000000')}]
    console.log('artwork', artworkMock)


  return (
    <>
    <h1>Page is loaded</h1>
    <div className="container, gallery__container">
      <div className="artwork">
        {artworkMock.map((artwork, id) =>
        <div key={id}>
          <h3 className="art-title">{artwork.title}</h3>
          <div className="canvas">
            {artwork?.pixels?.map((pixel, pixelId) => (
              <div
                key={String(id) + String(pixelId)}
                style={{ backgroundColor: pixel }}
                className="canvas__pixel"
              ></div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>

    </>
  )
}

export default Gallery