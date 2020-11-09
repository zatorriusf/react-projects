import React, { useState, useContext, useEffect,useCallback} from "react";


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const {drinks} = data;
      if(Array.isArray(drinks)){
        const newCocktailList = drinks.map(drink =>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drink;
          const newDrink = {
            id : idDrink,
            name :strDrink,
            img : strDrinkThumb,
            info : strAlcoholic,
            glass : strGlass
          };
          return newDrink;
        })
        setCocktailList(newCocktailList);
      }
      else {
        setCocktailList([]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  } ,[searchTerm]);
  useEffect(() => {
    fetchDrinks(); 
  }, [searchTerm,fetchDrinks]);
  return (
    <AppContext.Provider value={{ loading, cocktailList, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
