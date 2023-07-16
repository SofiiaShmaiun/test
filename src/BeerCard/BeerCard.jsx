import React, { useEffect } from "react";
import { Item } from "./BeerCard.styled";
import { Link } from "react-router-dom";
import useBeerStore from "../store";
import { fetchRecipes } from "../services/punkapi";

export const BeerCard = () => {
  const { beers, selectedBeers, page, setBeers, toggleRecipeSelection } =
    useBeerStore();

  useEffect(() => {
    const getRecipes = async (page) => {
      const data = await fetchRecipes(page);
      setBeers(data);
    };

    getRecipes(page);
  }, [page, setBeers]);

  const handleRecipeRightClick = (recipe, event) => {
    event.preventDefault();
    toggleRecipeSelection(recipe);
  };

  return beers.slice(0, 15).map((recipe) => (
    <Link to={`${recipe.id}`} key={recipe.id}>
      <Item
        onContextMenu={(event) => handleRecipeRightClick(recipe, event)}
        style={{
          background: selectedBeers.includes(recipe) ? "lightblue" : "none",
        }}
      >
        <img src={recipe.image_url} alt={recipe.tagline} width="30px" />
        <p> {recipe.name}</p>
        <p>{recipe.description}</p>
      </Item>
    </Link>
  ));
};
