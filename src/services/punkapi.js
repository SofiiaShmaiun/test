import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/beers";

export const fetchRecipes = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}`);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
