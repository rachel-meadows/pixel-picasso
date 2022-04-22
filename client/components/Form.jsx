import React, { useState } from 'react'

function Form(props) {

  const {pixels} = props
  const [title, setTitle] = useState('')

  function handleChange (event) {
    setTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} >
      <input onChange={handleChange} value = {title}/>
      Title:
      <button>Submit! </button>
    </form>
  )
}

export default Form
