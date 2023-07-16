import React, { useEffect } from "react";
import { BeerCard } from "../BeerCard/BeerCard";
import useBeerStore from "../store";
import { Button, List } from "./BeerList.styled";

const BeerList = () => {
  const {
    selectedBeers,
    deleteSelectedRecipes,
    nextPage,
    beers,
    page,
    loadMoreRecipes,
  } = useBeerStore();

  useEffect(() => {
    if (beers.length === 0) {
      nextPage();
      loadMoreRecipes(page);
    }
  }, [beers.length]);

  const handleDeleteClick = () => {
    deleteSelectedRecipes();
  };

  return (
    <div>
      <List>
        <BeerCard />
      </List>

      {selectedBeers && selectedBeers.length > 0 && (
        <Button onClick={handleDeleteClick}>Delete</Button>
      )}
    </div>
  );
};

export default BeerList;
