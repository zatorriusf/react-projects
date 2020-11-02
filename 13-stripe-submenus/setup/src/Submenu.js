import React, { useRef, useEffect } from "react";
import {  useGlobalContext } from "./context";
const Submenu = () => {
  const {
    showSubMenu,
    location,
    subMenuPage
  } = useGlobalContext();
  const { page, links } = subMenuPage;
  const menuRef = useRef();
  useEffect(() => {
    const subMenu = menuRef.current;
    const { btnCenter, btnBottom } = location;
    subMenu.style.left = `${btnCenter}px`;
    subMenu.style.top = `${btnBottom}px`;
  }, [location,links]);
  return (
    <aside className={`submenu ${showSubMenu && "show"}`} ref={menuRef}>
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>
      {links.map((link, index) => {
                    const {url,icon,label} = link;
                    return(
                      <a href={url} key={index}>{icon}
                      {label}</a>
                    )
                  })}
      </div>
    </aside>
  );
};

export default Submenu;
