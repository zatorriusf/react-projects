import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({img,id,name,glass,info}) => {
  return (
    <article className="cocktail">
      <div className='img-container'>
        <img src = {img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className='btn btn-primary btn-details\'>Details</button>
        </Link>
      </div>

    </article>
  )
}

export default Cocktail
