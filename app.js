import { data } from "./data.js";

const $recipeList = document.getElementById("recipes");
const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");
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

let filteredArray = data;
renderRecipes(filteredArray);

//----FILTER FUNCTIONS { filterAppliance(array, value), filterUstensils(array, value), filterIngredients(array, value) }----
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

//----DROPDOWNS FUNCTIONS { dropdownApplaince(array), dropdownUstensils(array), dropdownIngredients(array) }----
function dropdownAppliance(data) {
  // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
  for (let i = 0; i < data.length; i++) {
    const applianceOption = document.createElement("button");
    applianceOption.textContent = data[i].appliance;
    applianceOption.value = data[i].appliance;
    appliance_dropdown.appendChild(applianceOption);
  }
}
function dropdownUstensils(data) {
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ustensils.length; y++) {
      const optionNames = document.createElement("button");
      optionNames.textContent = data[i].ustensils[y];
      optionNames.value = data[i].ustensils[y];
      ustensils_dropdown.appendChild(optionNames);
    }
  }
}
function dropdownIngredients(data) {
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ingredients.length; y++) {
      const optionNames = document.createElement("button");
      optionNames.textContent = data[i].ingredients[y].ingredient;
      optionNames.value = data[i].ingredients[y].ingredient;
      ingredients_dropdown.appendChild(optionNames);
    }
  }
}

//----FUNCTIONS DECLARATIONS----
dropdownAppliance(filteredArray);
dropdownUstensils(filteredArray);
dropdownIngredients(filteredArray);

let buttonFilteringByAppliance = [];
let buttonFilteringByUstensils = [];
let buttonFilteringByIngredients = [];

//----CALLING THE DELETE VALUE VIA THE FILTER BUTTON----
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
    dropdownToggle.style.display = "grid";
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
appliance_dropdown.addEventListener("click", function (event) {
  filteredArray = filterAppliance(filteredArray, event.target.value);
  renderRecipes(filteredArray);
  // CREATE BUTTON
  buttonFilteringByAppliance.push(event.target.value);
  console.log(buttonFilteringByAppliance);
  FilteringAll();
  const $applianceValueButton = document.createElement("button");
  $applianceValueButton.textContent = event.target.value;
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
ustensils_dropdown.addEventListener("click", function (event) {
  filteredArray = filterUstensils(filteredArray, event.target.value);
  renderRecipes(filteredArray);
  // CREATE BUTTON
  buttonFilteringByUstensils.push(event.target.value);
  FilteringAll();

  const $ustensilValueButton = document.createElement("button");
  $ustensilValueButton.textContent = event.target.value;
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
ingredients_dropdown.addEventListener("click", function (event) {
  filteredArray = filterIngredients(filteredArray, event.target.value);
  renderRecipes(filteredArray);
  // CREATE BUTTON
  buttonFilteringByIngredients.push(event.target.value);
  FilteringAll();
  const $ingredientValueButton = document.createElement("button");
  $ingredientValueButton.textContent = event.target.value;
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

function renderRecipe(recipe) {
  const $recipeListItem = document.createElement("li");
  $recipeListItem.className = "recipe-list-item";

  const $recipeListItemPicture = document.createElement("div");
  $recipeListItemPicture.className = "recipe-list-item__picture";
  $recipeListItem.appendChild($recipeListItemPicture);

  const $recipeListItemContent = document.createElement("div");
  $recipeListItemContent.className = "recipe-list-item__content";
  $recipeListItem.appendChild($recipeListItemContent);

  // <div>
  const $firstLine = document.createElement("div");
  $firstLine.className = "firstLine";
  $recipeListItemContent.appendChild($firstLine);

  const $recipeListItemTitle = document.createElement("h2");
  $recipeListItemTitle.className = "recipe-list-item__title";
  $recipeListItemTitle.textContent = recipe.name;
  $firstLine.appendChild($recipeListItemTitle);

  const $recipeListItemCookingTime = document.createElement("span");
  $recipeListItemCookingTime.className = "recipe-list-item__cooking-time";
  const $clockIcon = document.createElement("i");
  $clockIcon.className = "far fa-clock";
  $recipeListItemCookingTime.appendChild($clockIcon);
  $recipeListItemCookingTime.appendChild(
    document.createTextNode(`${recipe.time} min`)
  );
  $firstLine.appendChild($recipeListItemCookingTime);
  // </div>

  // <div>
  const $secondLine = document.createElement("div");
  $secondLine.className = "secondLine";
  $recipeListItemContent.appendChild($secondLine);

  const $recipeIngredientList = document.createElement("ul");
  $recipeIngredientList.className = "recipe-ingredient-list";
  $secondLine.appendChild($recipeIngredientList);
  recipe.ingredients.forEach(({ ingredient }) => {
    const $recipeIngredientListItem = document.createElement("li");
    $recipeIngredientListItem.className = "recipe-ingredient-list-item";
    $recipeIngredientListItem.textContent = ingredient;
    $recipeIngredientList.appendChild($recipeIngredientListItem);
  });

  const $recipeListItemDescription = document.createElement("p");
  $recipeListItemDescription.className = "recipe-list-item__description";
  $recipeListItemDescription.textContent = recipe.description;
  $secondLine.appendChild($recipeListItemDescription);
  // </div>

  return $recipeListItem;
}

function renderRecipes(recipes) {
  $recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    $recipeList.appendChild(renderRecipe(recipe));
  });
}
