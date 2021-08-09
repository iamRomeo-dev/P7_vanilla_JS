import { data } from "./data.js";

const recipes = document.getElementById("recipes");
const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");

let filteredArray = data;
createRecipe(filteredArray);

//----FILTER FUNCTIONS { filterAppliance, filterUstensils, filterIngredients }----
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

appliance_dropdown.addEventListener("input", function (event) {
  console.log(filterAppliance(filteredArray, event.target.value));
  filteredArray = filterAppliance(filteredArray, event.target.value);
  recipes.innerHTML = "";
  createRecipe(filteredArray);
});

ustensils_dropdown.addEventListener("input", function (event) {
  console.log(filterUstensils(filteredArray, event.target.value));
  filteredArray = filterUstensils(filteredArray, event.target.value);
  recipes.innerHTML = "";
  createRecipe(filteredArray);
});

ingredients_dropdown.addEventListener("input", function (event) {
  console.log(filterIngredients(filteredArray, event.target.value));
  filteredArray = filterIngredients(filteredArray, event.target.value);
  recipes.innerHTML = "";
  createRecipe(filteredArray);
});

//----DROPDOWNS FUNCTIONS { dropdownApplaince, dropdownUstensils, dropdownIngredients }----
function dropdownAppliance(data) {
  // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
  for (let i = 0; i < data.length; i++) {
    const applianceOption = document.createElement("option");
    applianceOption.textContent = data[i].appliance;
    applianceOption.value = data[i].appliance;
    appliance_dropdown.appendChild(applianceOption);
  }
}

function dropdownUstensils(data) {
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ustensils.length; y++) {
      const optionNames = document.createElement("option");
      optionNames.textContent = data[i].ustensils[y];
      optionNames.value = data[i].ustensils[y];
      ustensils_dropdown.appendChild(optionNames);
    }
  }
}

function dropdownIngredients(data) {
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ingredients.length; y++) {
      const optionNames = document.createElement("option");
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

//----CREATION OF CARDS (array in argument)----
function createRecipe(data) {
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");

    const recipe_photo = document.createElement("div");
    const recipe_figcaption = document.createElement("div");
    const divFirstLine = document.createElement("div");
    const nameFirstLine = document.createElement("h2");
    const spanFirstLine = document.createElement("div");
    const spanLogoClock = document.createElement("span");
    const spanTime = document.createElement("span");
    const spanTimeMin = document.createElement("span");
    const divSecondLine = document.createElement("div");
    const ulIngredients = document.createElement("ul");

    const spanDescription = document.createElement("div");

    recipe_photo.classList.add("recipe_photo");
    recipe_figcaption.classList.add("recipe_figcaption");
    divFirstLine.classList.add("divFirstLine");
    spanFirstLine.classList.add("spanFirstLine");
    li.classList.add("li");
    recipes.classList.add("Aaa_recipes_container");
    divSecondLine.classList.add("divSecondLine");
    ulIngredients.classList.add("ulIngredients");

    spanDescription.classList.add("spanDescription");

    nameFirstLine.textContent = data[i].name;
    spanLogoClock.innerHTML = '<i class="far fa-clock"></i>';
    spanTime.textContent = data[i].time;
    spanTimeMin.textContent = "min";
    spanDescription.textContent = data[i].description;

    //INGREDIENTS CREATION
    const toto = data[i].ingredients.map((ingredient) => ingredient.ingredient);
    // console.log(toto);
    for (let i = 0; i < toto.length; i++) {
      const liIngredient = document.createElement("li");
      liIngredient.classList.add("liIngredient");
      liIngredient.textContent = toto[i];
      ulIngredients.appendChild(liIngredient);
    }

    spanFirstLine.append(spanLogoClock, spanTime, spanTimeMin);
    divFirstLine.append(nameFirstLine, spanFirstLine);
    divSecondLine.append(ulIngredients, spanDescription);
    recipe_figcaption.append(divFirstLine, divSecondLine);
    li.append(recipe_photo, recipe_figcaption);
    recipes.appendChild(li);
  }
}
