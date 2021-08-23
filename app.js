import { data } from "./data.js";
import { searchBar } from "./searchBar.js";
import {
  dropdownAppliance,
  dropdownUstensils,
  dropdownIngredients,
} from "./dropdowns.js";
import { renderRecipe } from "./recipe.js";

const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");
const $recipeList = document.getElementById("recipes");
const $buttonValues = document.getElementById("buttonValues");
const appliance_dropdown_button = document.getElementById(
  "appliance_dropdown_button"
);
const ustensils_dropdown_button = document.getElementById(
  "ustensils_dropdown_button"
);
const ingredients_dropdown_button = document.getElementById(
  "ingredients_dropdown_button"
);
const ustensil_container = document.getElementById("ustensil-container");
const appliance_container = document.getElementById("appliance-container");
const ingredient_container = document.getElementById("ingredient-container");

let filteredArray = data;
renderRecipes(filteredArray);

searchBar(filteredArray);

//----FILTER FUNCTIONS { filterAppliance(array, string), filterUstensils(array, string), filterIngredients(array, string) }----
//APPLIANCE
function filterAppliance(data, value) {
  return data.filter((recipe) => recipe.appliance.includes(value));
}
//USTENSILS
function filterUstensils(data, value) {
  return data.filter((recipe) => recipe.ustensils.includes(value));
}
//INGREDIENTS
function filterIngredients(data, value) {
  return data.filter((recipe) =>
    recipe.ingredients
      .map((ingredient) => ingredient.ingredient)
      .includes(value)
  );
}
dropdownAppliance(filteredArray);
dropdownUstensils(filteredArray);
dropdownIngredients(filteredArray);

let buttonFilteringByAppliance = [];
let buttonFilteringByUstensils = [];
let buttonFilteringByIngredients = [];

//---- ----
function FilteringAll() {
  let filteredArrayNew = data;
  for (let i = 0; i < buttonFilteringByAppliance.length; i++) {
    filteredArrayNew = filterAppliance(
      filteredArrayNew,
      buttonFilteringByAppliance[i]
    );
  }
  for (let i = 0; i < buttonFilteringByUstensils.length; i++) {
    filteredArrayNew = filterUstensils(
      filteredArrayNew,
      buttonFilteringByUstensils[i]
    );
  }
  for (let i = 0; i < buttonFilteringByIngredients.length; i++) {
    filteredArrayNew = filterIngredients(
      filteredArrayNew,
      buttonFilteringByIngredients[i]
    );
  }
  renderRecipes(filteredArrayNew);
}

//----FUNCTION IN ORDER TO OPEN AND CLOSE THE BUTTONS OF FILTER DROPDOWNS----
function toggleApplianceDropdown(value) {
  let dropdownToggle = document.getElementById(value);
  if (dropdownToggle.style.display === "none") {
    dropdownToggle.style.display = "flex";
  } else {
    dropdownToggle.style.display = "none";
  }
}

//----ACTION THE DROPDOWNS----
//----APPLIANCE----
appliance_dropdown.style.display = "none";
appliance_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("appliance_dropdown");
});
if (appliance_container != null) {
  appliance_container.addEventListener("click", function (event) {
    buttonFilteringByAppliance.push(event.target.value);
    FilteringAll();
    // CREATE BUTTON

    const $applianceValueButton = document.createElement("button");
    $applianceValueButton.className = "appliance-value-button";
    const $applianceValue = document.createElement("span");
    const $appliancetIcon = document.createElement("span");
    $applianceValue.textContent = `${event.target.value}`;
    $appliancetIcon.innerHTML = '<i class="far fa-times-circle"></i>';
    $applianceValueButton.append($applianceValue, $appliancetIcon);
    $buttonValues.appendChild($applianceValueButton);

    $applianceValueButton.addEventListener("click", function () {
      // REMOVE FROM THE DOM
      $applianceValueButton.remove($applianceValueButton);
      // REMOVE FROM THE ARRAY
      Array.prototype.remove_by_value = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === val) {
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      };

      buttonFilteringByAppliance = buttonFilteringByAppliance.remove_by_value(
        event.target.value
      );
      FilteringAll();
    });
  });
}
//----USTENSILS----
ustensils_dropdown.style.display = "none";
ustensils_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ustensils_dropdown");
});
if (ustensil_container != null) {
  ustensils_dropdown.addEventListener("click", function (event) {
    buttonFilteringByUstensils.push(event.target.value);

    FilteringAll();
    // CREATE BUTTON
    const $ustensilValueButton = document.createElement("button");
    $ustensilValueButton.className = "ustensil-value-button";
    const $ustensilValue = document.createElement("span");
    const $ustensilIcon = document.createElement("span");
    $ustensilValue.textContent = `${event.target.value}`;
    $ustensilIcon.innerHTML = '<i class="far fa-times-circle"></i>';
    $ustensilValueButton.append($ustensilValue, $ustensilIcon);
    $buttonValues.appendChild($ustensilValueButton);
    $ustensilValueButton.addEventListener("click", function () {
      // REMOVE FROM THE DOM
      $ustensilValueButton.remove($ustensilValueButton);
      // REMOVE FROM THE ARRAY
      Array.prototype.remove_by_value = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === val) {
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      };

      buttonFilteringByUstensils = buttonFilteringByUstensils.remove_by_value(
        event.target.value
      );
      FilteringAll();
    });
  });
}
//----INGREDIENTS----
ingredients_dropdown.style.display = "none";
ingredients_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ingredients_dropdown");
});
if (ingredient_container != null) {
  ingredient_container.addEventListener("click", function (event) {
    FilteringAll();
    // CREATE BUTTON

    const $ingredientValueButton = document.createElement("button");
    $ingredientValueButton.className = "ingredient-value-button";
    const $ingredientValue = document.createElement("span");
    const $ingredientIcon = document.createElement("span");
    $ingredientValue.textContent = `${event.target.value}`;
    $ingredientIcon.innerHTML = '<i class="far fa-times-circle"></i>';
    $ingredientValueButton.append($ingredientValue, $ingredientIcon);
    $buttonValues.appendChild($ingredientValueButton);

    $ingredientValueButton.addEventListener("click", function () {
      // REMOVE FROM THE DOM
      $ingredientValueButton.remove($ingredientValueButton);
      // REMOVE FROM THE ARRAY
      Array.prototype.remove_by_value = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === val) {
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      };

      buttonFilteringByIngredients.remove_by_value(event.target.value);
      FilteringAll();
    });
  });
}

export function renderRecipes(recipes) {
  $recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    $recipeList.appendChild(renderRecipe(recipe));
  });
}
