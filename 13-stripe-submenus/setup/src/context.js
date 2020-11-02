import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [subMenuPage, setSubMenuPage] = useState({page:'',links:[]})
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const openSubMenu = (page, coord) => {
    const subMenuObj = sublinks.find(object => object.page === page);
    setSubMenuPage(subMenuObj);
    setLocation(coord);
    setShowSubMenu(true);
  };
  const closeSubMenu = () => {
    setShowSubMenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        openSidebar,
        closeSidebar,
        showSubMenu,
        openSubMenu,
        closeSubMenu,
        location,
        subMenuPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
