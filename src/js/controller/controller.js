import { state, loadRecipe } from "../model/model";
import recepieView from "../views/recepieView.js";



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) {
      return;
    }

    recepieView.renderSpinner();

    await loadRecipe(id);

    recepieView.render(state.recipe);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("hashchange", controlRecipes);
window.addEventListener("load", controlRecipes);
