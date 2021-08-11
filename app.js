import { data } from "./data.js";
import {
  filterRecipes,
  getAllAppliances,
  getAllIngredients,
  getAllUstensils,
} from "./filterRecipes.js";
import { createDropdown } from "./dropdown.js";

const parseQueryParams = () => {
  return new URLSearchParams(window.location.search);
};

const stringifySearchParams = (searchParams) => {
  const nonEmptySearchParams = Object.fromEntries(
    Object.entries(searchParams).filter(([key, value]) =>
      Array.isArray(value) ? value.length !== 0 : !!value
    )
  );
  const search = new URLSearchParams(nonEmptySearchParams).toString();
  return search ? `?${search}` : "";
};

const arrify = (value) => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

const queryParams = parseQueryParams();

const $recipeList = document.getElementById("recipes");

const appliances = getAllAppliances(data);
const selectedAppliances = new Set(
  queryParams.get("appliances") ? arrify(queryParams.get("appliances")) : []
);

const ustensils = getAllUstensils(data);
const selectedUstensils = new Set(
  queryParams.get("ustensils") ? arrify(queryParams.get("ustensils")) : []
);

const ingredients = getAllIngredients(data);
const selectedIngredients = new Set(
  queryParams.get("ingredients") ? arrify(queryParams.get("ingredients")) : []
);

const render = () => {
  const searchParams = {
    appliances: Array.from(selectedAppliances),
    ustensils: Array.from(selectedUstensils),
    ingredients: Array.from(selectedIngredients),
  };
  const search = stringifySearchParams(searchParams);
  history.pushState(null, null, `${location.pathname}${search}`);
  renderRecipes(filterRecipes(data, searchParams));
};

render();

createDropdown({
  $button: document.getElementById("appliance_dropdown_button"),
  $list: document.getElementById("appliance_dropdown"),
  values: appliances,
  onSelect: (appliance) => {
    selectedAppliances.add(appliance);
    render();
  },
});

createDropdown({
  $button: document.getElementById("ustensils_dropdown_button"),
  $list: document.getElementById("ustensils_dropdown"),
  values: ustensils,
  onSelect: (ustensil) => {
    selectedUstensils.add(ustensil);
    render();
  },
});

createDropdown({
  $button: document.getElementById("ingredients_dropdown_button"),
  $list: document.getElementById("ingredients_dropdown"),
  values: ingredients,
  onSelect: (ingredient) => {
    selectedIngredients.add(ingredient);
    render();
  },
});

function renderRecipe(recipe) {
  const $recipeListItem = document.createElement("li");
  $recipeListItem.className = "recipe-list-item";

  const $recipeListItemPicture = document.createElement("div");
  $recipeListItemPicture.className = "recipe-list-item__picture";
  $recipeListItem.appendChild($recipeListItemPicture);

  const $recipeListItemContent = document.createElement("div");
  $recipeListItemContent.className = "recipe-list-item__content";
  $recipeListItem.appendChild($recipeListItemContent);

  const $recipeListItemCookingTime = document.createElement("span");
  $recipeListItemCookingTime.className = "recipe-list-item__cooking-time";
  const $clockIcon = document.createElement("i");
  $clockIcon.className = "far fa-clock";
  $recipeListItemCookingTime.appendChild($clockIcon);
  $recipeListItemCookingTime.appendChild(
    document.createTextNode(`${recipe.time} min`)
  );
  $recipeListItemContent.appendChild($recipeListItemCookingTime);

  const $recipeListItemTitle = document.createElement("h2");
  $recipeListItemTitle.className = "recipe-list-item__title";
  $recipeListItemTitle.textContent = recipe.name;
  $recipeListItemContent.appendChild($recipeListItemTitle);

  const $recipeIngredientList = document.createElement("ul");
  $recipeIngredientList.className = "recipe-ingredient-list";
  $recipeListItemContent.appendChild($recipeIngredientList);
  recipe.ingredients.forEach(({ ingredient }) => {
    const $recipeIngredientListItem = document.createElement("li");
    $recipeIngredientListItem.className = "recipe-ingredient-list-item";
    $recipeIngredientListItem.textContent = ingredient;
    $recipeIngredientList.appendChild($recipeIngredientListItem);
  });

  const $recipeListItemDescription = document.createElement("p");
  $recipeListItemDescription.className = "recipe-list-item__description";
  $recipeListItemDescription.textContent = recipe.description;
  $recipeListItemContent.appendChild($recipeListItemDescription);

  return $recipeListItem;
}

function renderRecipes(recipes) {
  $recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    $recipeList.appendChild(renderRecipe(recipe));
  });
}
