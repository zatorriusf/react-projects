import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktailList} = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(cocktailList.length < 1){
    return <h2 className='section-title'>No cocktails match your search</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktailList.map( drink =>{
          return <Cocktail key={drink.id}{...drink} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
