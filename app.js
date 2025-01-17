import { data } from "./data.js";
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
const $searchBar = document.getElementById("searchBar");

let filteredArray = data;
renderRecipes(filteredArray);

//----FILTER FUNCTIONS { filterAppliance(array, string), filterUstensils(array, string), filterIngredients(array, string), filterSearchBar(data, string) }----
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
function filterSearchBar(data, value) {
  return data.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(value.toLowerCase()) ||
      recipe.description.toLowerCase().includes(value.toLowerCase()) ||
      recipe.ingredients
        .map((ingredient) => ingredient.ingredient.toLowerCase())
        .includes(value.toLowerCase())
    );
  });
}

//Set the dropdowns
dropdownAppliance(filteredArray);
dropdownUstensils(filteredArray);
dropdownIngredients(filteredArray);

const appliance_container = document.getElementById("appliance-container");
const ustensil_container = document.getElementById("ustensil-container");
const ingredient_container = document.getElementById("ingredient-container");
const appliance_overlay = document.getElementById("appliance-overlay");
const ustensil_overlay = document.getElementById("ustensil-overlay");
const ingredient_overlay = document.getElementById("ingredient-overlay");

//Arrays of key words for search
let buttonFilteringByAppliance = [];
let buttonFilteringByUstensils = [];
let buttonFilteringByIngredients = [];
let filteredArraySearch = [];

//Function for filtering used in with dropdowns
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

  if (filteredArrayNew.length > 0) {
    renderRecipes(filteredArrayNew);
    //Re-render the dropdowns with only the remaining values possible
    let applianceArray = [];
    for (let y = 0; y < filteredArrayNew.length; y++) {
      applianceArray.push(filteredArrayNew[y].appliance);
    }
    let setApplianceArray = new Set(applianceArray);
    let arrifySetApplianceArray = Array.from(setApplianceArray);
    appliance_container.innerHTML = "";
    for (let i = 0; i < arrifySetApplianceArray.length; i++) {
      const optionNames = document.createElement("button");
      optionNames.textContent = arrifySetApplianceArray[i];
      optionNames.value = arrifySetApplianceArray[i];
      appliance_container.appendChild(optionNames);
    }

    let ustensilArray = [];
    for (let i = 0; i < filteredArrayNew.length; i++) {
      for (let y = 0; y < filteredArrayNew[i].ustensils.length; y++) {
        ustensilArray.push(filteredArrayNew[i].ustensils[y]);
      }
    }
    let setUstensilArray = new Set(ustensilArray);
    let arrifySetUstensilArray = Array.from(setUstensilArray);
    ustensil_container.innerHTML = "";
    for (let i = 0; i < arrifySetUstensilArray.length; i++) {
      const optionNames = document.createElement("button");
      optionNames.textContent = arrifySetUstensilArray[i];
      optionNames.value = arrifySetUstensilArray[i];
      ustensil_container.appendChild(optionNames);
    }

    let ingredientArray = [];
    for (let i = 0; i < filteredArrayNew.length; i++) {
      for (let y = 0; y < filteredArrayNew[i].ingredients.length; y++) {
        ingredientArray.push(filteredArrayNew[i].ingredients[y].ingredient);
      }
    }
    let setIngredientArray = new Set(ingredientArray);
    let arrifySetIngredientArray = Array.from(setIngredientArray);
    ingredient_container.innerHTML = "";
    for (let i = 0; i < arrifySetIngredientArray.length; i++) {
      const optionNames = document.createElement("button");
      optionNames.textContent = arrifySetIngredientArray[i];
      optionNames.value = arrifySetIngredientArray[i];
      ingredient_container.appendChild(optionNames);
    }
  } else {
    $recipeList.innerHTML = "Aucune recette ne correspond à votre critère...";
  }
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
appliance_overlay.addEventListener("click", () => {
  appliance_dropdown.style.display = "none";
});
ustensil_overlay.addEventListener("click", () => {
  ustensils_dropdown.style.display = "none";
});
ingredient_overlay.addEventListener("click", () => {
  ingredients_dropdown.style.display = "none";
});

$searchBar.addEventListener("keyup", (event) => {
  const searchString = event.target.value.toLowerCase();
  if (searchString.length > 2) {
    filteredArraySearch.push(searchString);
    //Format the array in order to keep just the last item (so the full search bar)
    const filteredArraySearchNewFormat =
      filteredArraySearch[filteredArraySearch.length - 1];

    //Split the array in order to put each words inside an item
    var filteredArraySearchNewFormat2 =
      filteredArraySearchNewFormat.split(/(\s+)/);

    //Function filtering all
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

    //Divide the array by 2
    const middleIndex = Math.ceil(filteredArrayNew.length / 2);
    const firstHalf = filteredArrayNew.slice().splice(0, middleIndex);
    const secondHalf = filteredArrayNew.slice().splice(-middleIndex);
    //EO Divide the array by 2
    for (let i = 0; i < filteredArraySearchNewFormat2.length; i++) {
      filteredArrayNew = filterSearchBar(
        firstHalf,
        filteredArraySearchNewFormat2[i]
      );
    }
    for (let i = 0; i < filteredArraySearchNewFormat2.length; i++) {
      filteredArrayNew = filterSearchBar(
        secondHalf,
        filteredArraySearchNewFormat2[i]
      );
    }

    if (filteredArrayNew.length > 0) {
      renderRecipes(filteredArrayNew);
      //Re-render the dropdowns with only the remaining values possible
      let applianceArray = [];
      for (let y = 0; y < filteredArrayNew.length; y++) {
        applianceArray.push(filteredArrayNew[y].appliance);
      }
      let setApplianceArray = new Set(applianceArray);
      let arrifySetApplianceArray = Array.from(setApplianceArray);
      appliance_container.innerHTML = "";
      for (let i = 0; i < arrifySetApplianceArray.length; i++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = arrifySetApplianceArray[i];
        optionNames.value = arrifySetApplianceArray[i];
        appliance_container.appendChild(optionNames);
      }

      let ustensilArray = [];
      for (let i = 0; i < filteredArrayNew.length; i++) {
        for (let y = 0; y < filteredArrayNew[i].ustensils.length; y++) {
          ustensilArray.push(filteredArrayNew[i].ustensils[y]);
        }
      }
      let setUstensilArray = new Set(ustensilArray);
      let arrifySetUstensilArray = Array.from(setUstensilArray);
      ustensil_container.innerHTML = "";
      for (let i = 0; i < arrifySetUstensilArray.length; i++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = arrifySetUstensilArray[i];
        optionNames.value = arrifySetUstensilArray[i];
        ustensil_container.appendChild(optionNames);
      }

      let ingredientArray = [];
      for (let i = 0; i < filteredArrayNew.length; i++) {
        for (let y = 0; y < filteredArrayNew[i].ingredients.length; y++) {
          ingredientArray.push(filteredArrayNew[i].ingredients[y].ingredient);
        }
      }
      let setIngredientArray = new Set(ingredientArray);
      let arrifySetIngredientArray = Array.from(setIngredientArray);
      ingredient_container.innerHTML = "";
      for (let i = 0; i < arrifySetIngredientArray.length; i++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = arrifySetIngredientArray[i];
        optionNames.value = arrifySetIngredientArray[i];
        ingredient_container.appendChild(optionNames);
      }
    } else {
      $recipeList.innerHTML = "Aucune recette ne correspond à votre critère...";
    }
  }

  if (searchString === "") {
    if (
      buttonFilteringByAppliance.length === 0 &&
      buttonFilteringByUstensils.length === 0 &&
      buttonFilteringByIngredients.length === 0
    ) {
      renderRecipes(data);
    } else {
      FilteringAll();
    }
  }
});

//----APPLIANCE----
appliance_dropdown.style.display = "none";
appliance_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("appliance_dropdown");
});
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

//----USTENSILS----
ustensils_dropdown.style.display = "none";
ustensils_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ustensils_dropdown");
});
ustensil_container.addEventListener("click", function (event) {
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

//----INGREDIENTS----
ingredients_dropdown.style.display = "none";
ingredients_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ingredients_dropdown");
});
ingredient_container.addEventListener("click", function (event) {
  buttonFilteringByIngredients.push(event.target.value);
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

export function renderRecipes(recipes) {
  $recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    $recipeList.appendChild(renderRecipe(recipe));
  });
}
