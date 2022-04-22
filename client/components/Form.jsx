import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendArtwork } from '../actions'
function Form(props) {

  const dispatch = useDispatch()
  const {pixels} = props
  const [title, setTitle] = useState('')

  function handleChange (event) {
    setTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(sendArtwork({title, pixels})) 
  }

  return (
    <form onSubmit={handleSubmit} >
      <input onChange={handleChange} value = {title}/>
      Title:
      <button> Submit! </button>
    </form>
  )
}

export default Form


