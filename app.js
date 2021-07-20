import { data } from "./data.js";

const recipes = document.getElementById("recipes");
const name_dropdown = document.getElementById("name_dropdown");

function dropdown() {
  for (let i = 0; i < data.length; i++) {
    const optionNames = document.createElement("option");
    optionNames.textContent = data[i].name;
    optionNames.value = data[i].name;
    name_dropdown.appendChild(optionNames);
  }
}
dropdown();

var dropdownValue = "";

document.addEventListener(
  "input",
  function (event) {
    if (event.target.id !== "name_dropdown") return;

    if (event.target.value === event.target.value) {
      dropdownValue = event.target.value;
    }
  },
  false
);
console.log(dropdownValue)
//APPLIANCE
const filterAppliance = data.filter((recipe) =>
  recipe.appliance.includes(dropdownValue)
);
console.log("APPLIANCE", filterAppliance);
//USTENSILS
const filterUstensils = filterAppliance.filter((recipe) =>
  recipe.ustensils.includes("presse citron")
);
console.log("USTENSILS", filterUstensils);
//Ingredients
const filterIngredients = filterUstensils.filter((recipe) =>
  recipe.ingredients
    .map((ingredient) => ingredient.ingredient)
    .includes("Sucre")
);
console.log("Ingredients", filterIngredients);

function createRecipe() {
  for (let i = 0; i < filterAppliance.length; i++) {
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
    const liIngredient = document.createElement("li");

    const spanDescription = document.createElement("div");

    recipe_photo.classList.add("recipe_photo");
    recipe_figcaption.classList.add("recipe_figcaption");
    divFirstLine.classList.add("divFirstLine");
    spanFirstLine.classList.add("spanFirstLine");
    li.classList.add("li");
    recipes.classList.add("Aaa_recipes_container");
    divSecondLine.classList.add("divSecondLine");
    ulIngredients.classList.add("ulIngredients");
    liIngredient.classList.add("liIngredient");
    spanDescription.classList.add("spanDescription");

    nameFirstLine.textContent = filterAppliance[i].name;
    spanLogoClock.innerHTML = '<i class="far fa-clock"></i>';
    spanTime.textContent = filterAppliance[i].time;
    spanTimeMin.textContent = "min";

    const toto = filterAppliance[i].ingredients.map(
      (ingredient) => ingredient.ingredient
    );
    // console.log(toto)
    liIngredient.textContent = toto;

    spanDescription.textContent = filterAppliance[i].description;

    spanFirstLine.appendChild(spanLogoClock);
    spanFirstLine.appendChild(spanTime);
    spanFirstLine.appendChild(spanTimeMin);
    divFirstLine.appendChild(nameFirstLine);
    divFirstLine.appendChild(spanFirstLine);
    ulIngredients.appendChild(liIngredient);

    divSecondLine.appendChild(ulIngredients);
    divSecondLine.appendChild(spanDescription);

    recipe_figcaption.appendChild(divFirstLine);
    recipe_figcaption.appendChild(divSecondLine);
    li.appendChild(recipe_photo);
    li.appendChild(recipe_figcaption);
    recipes.appendChild(li);
  }
}

createRecipe();
