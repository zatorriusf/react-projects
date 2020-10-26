import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'
const Home = () => {
  const data= useGlobalContext();
  const {handleSideBar,handleModal} = data
  return <main>
    <button className="sidebar-toggle" onClick={() => handleSideBar()}><FaBars /></button>
    <button className="btn"onClick={() => handleModal()}>Show Modal</button>
  </main>
}

export default Home
