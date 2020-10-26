import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinksContainer, setShowLinksContainer] = useState(false);
  const linkContainerRef = useRef();
  const linksRef = useRef();

  useEffect(()=>{
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinksContainer){
      linkContainerRef.current.style.height=`${linkHeight}px`
    }
    if(!showLinksContainer){
      linkContainerRef.current.style.height=`0px`
    }
  }
  ,[showLinksContainer])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=>setShowLinksContainer(!showLinksContainer)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(link => {
              return <li key={link.id}>
                <a href={link.url}>
                  {link.text}
                </a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(link =>{
            return <li key={link.id}>
              <a href={link.url}>
                {link.icon}
              </a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
