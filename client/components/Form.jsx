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
      <input className='inputField' onChange={handleChange} placeholder='Title:' value={title} required />
      <button className="addButton">Add art</button>
    </form>
  )
}

export default Form


