import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {useGlobalContext} from './context'
const Sidebar = () => {
  const context = useGlobalContext();
  const {showSideBar,handleSideBar} = context
  return <aside className={`sidebar ${showSideBar && "show-sidebar"}`}> 
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="coding addict logo" />
      <button className="close-btn" onClick={() => handleSideBar()}><FaTimes /></button>
    </div>
    <ul className="links">
      {links.map(link =>{
        const {id,url,text,icon} = link;
        return <li key={id}>
          <a href={url}>{icon} {text}</a>
        </li>
      })}
    </ul>
    <ul className="social-icons">
      {social.map(link =>{
        const {id,url,icon} = link;
        return <li key={id} className="">
          <a href={url}>{icon}</a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
