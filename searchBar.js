// onChange={(e) => setSearch(e.target.value)
import { renderRecipes } from "./app.js";

const $recipeList = document.getElementById("recipes");

export const searchBar = (filteredArray, searchString) => {
  const filteredSearch = filteredArray.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchString) ||
      recipe.description.toLowerCase().includes(searchString) ||
      recipe.ingredients
        .map((ingredient) => ingredient.ingredient.toLowerCase())
        .includes(searchString)
    );
  });

  if (filteredSearch.length > 0) {
    console.log(888888, filteredSearch);
    return filteredSearch;
  } else {
    $recipeList.innerHTML = "Aucune recette ne correspond à votre critère...";
  }

  if (searchString === "") {
    return 25;
    // renderRecipes(filteredArray);
  }
};
