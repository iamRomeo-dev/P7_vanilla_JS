// onChange={(e) => setSearch(e.target.value)
import { renderRecipes } from "./app.js";

const $recipeList = document.getElementById("recipes");

export const searchBar = (filteredArray) => {
  const $searchBar = document.getElementById("searchBar");

  $searchBar.addEventListener("keyup", (event) => {
    const searchString = event.target.value.toLowerCase();
    if (searchString.length > 2) {
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
      renderRecipes(filteredSearch);
      } else {
        $recipeList.innerHTML = "Aucune recette ne correspond à votre critère...";
      }
    }
    if (searchString === "") {
      renderRecipes(filteredArray);
    }
  });
};
