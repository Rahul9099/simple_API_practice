import { API_URL } from "../config";
import { getJSON } from "../helper";
export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const url = `${API_URL}${id}`;
    const dataRecipe = await getJSON(url);
    // >>>removing the _ in data and storing in state object and only using the state object for rendering data as a database
    const { recipe } = dataRecipe.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    console.error("error from model.js>>>", error);
  }
};
