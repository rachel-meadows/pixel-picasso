import React from 'react'

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
      Title:
      <button>Submit! </button>
    </form>
  )
}

export default Form
