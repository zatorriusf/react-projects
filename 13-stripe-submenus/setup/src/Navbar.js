import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const {
    openSidebar,
    openSubMenu,
    closeSubMenu,
  } = useGlobalContext();
  const displySubmenu = (evt) =>{
    const page = evt.target.textContent;
    const tempBtn = evt.target.getBoundingClientRect();
    const btnCenter = (tempBtn.left + tempBtn.right)/2;
    const btnBottom = (tempBtn.bottom - 3);
    openSubMenu(page,{btnCenter,btnBottom});
  }
  const hideSubmenu = evt =>{
    
    if(!evt.target.classList.contains('link-btn')){
      closeSubMenu();
    }
  }
  return (
    <nav className="nav" onMouseOver={hideSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
