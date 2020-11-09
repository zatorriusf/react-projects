import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops?!?</h1>
        <Link to="/">
          <button className="btn btn-primary">Back Home</button>
        </Link>
      </div>
    </section>
  )
}

export default Error
