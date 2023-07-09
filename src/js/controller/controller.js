import { state, loadRecipe } from "../model/model";
import recepieView from "../views/recepieView.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    console.log("from controlRecipe", recipe);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("hashchange", controlRecipes);
window.addEventListener("load", controlRecipes);
