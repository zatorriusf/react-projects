import React,{useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const searchValue = useRef('');

  const {setSearchTerm} = useGlobalContext();
  const updateSearchTerm = () =>{
    setSearchTerm(searchValue.current.value);
  }
  useEffect(() =>{
    searchValue.current.focus();
  },[])
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(evt) => {evt.preventDefault();}}>
        <div className="form-control">
          <label htmlFor="name">What's your poison</label>
          <input type="text" id="name" ref={searchValue} onChange={updateSearchTerm}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
