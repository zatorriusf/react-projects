import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [showModal, setShowModal] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const handleSideBar = ()  =>{
        setShowSideBar(!showSideBar);
    }
    const handleModal = () =>{
        setShowModal(!showModal);
    }

    return <AppContext.Provider value={{showModal,showSideBar,handleModal,handleSideBar}}>{children}</AppContext.Provider>
}
//custo hooks
export const useGlobalContext = () =>{
    return useContext(AppContext);
}
 export{AppContext,AppProvider}