import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.netlify.app/api/react-useReducer-cart-project";
const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeSingleItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const alterItemCount = (id,addedAmount) => {
    dispatch({type: "ALTER_ITEM_COUNT" ,payload:{id,addedAmount}})
  }
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeSingleItem,
        alterItemCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
