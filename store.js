import axios from "axios";
import { create } from "zustand";
import { fetchRecipes } from "./services/punkapi";

const useBeerStore = create((set) => ({
  beers: [],
  beer: [],
  selectedBeers: [],
  page: 1,

  setBeers: (recipes) => {
    set(() => ({
      beers: recipes,
    }));
  },

  nextPage: () => {
    set((state) => ({
      page: state.page + 1,
    }));
  },

  setBeer: (recipes) =>
    set(() => ({
      beer: recipes,
    })),

  toggleRecipeSelection: (recipe) =>
    set((state) => {
      const selectedBeers = state.selectedBeers.includes(recipe)
        ? state.selectedBeers.filter(
            (selectedRecipe) => selectedRecipe !== recipe
          )
        : [...state.selectedBeers, recipe];

      return { selectedBeers };
    }),

  loadMoreRecipes: async (page) => {
    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    set(() => ({
      beers: response.data,
    }));
  },

  deleteSelectedRecipes: () => {
    set((state) => {
      const updatedRecipes = state.beers.filter(
        (recipe) => !state.selectedBeers.includes(recipe)
      );

      const selectedBeers = [];

      return { beers: updatedRecipes, selectedBeers };
    });
  },
}));

export default useBeerStore;
