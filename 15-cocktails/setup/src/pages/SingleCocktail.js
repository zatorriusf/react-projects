import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: img,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
        } = drinks[0];
        const ingredients = Object.keys(drinks[0]).filter((key) => {
          return /Ingredient/.test(key) && drinks[0][key]
        }).map(ingredient => drinks[0][ingredient]);
        const newCocktail = {
          name,
          img,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail({});
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCocktail();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">Failed to load cocktail</h2>;
  }
  const {
    name,
    img,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/">
        <button className="btn btn-primary">Back Home</button>
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients && ingredients.map((ingredient,index) =>{
              return <span key={index}>{ingredient}</span>
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
