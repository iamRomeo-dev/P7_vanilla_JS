import { data } from "./data.js";

const recipes = document.getElementById("recipes");
const name_dropdown = document.getElementById("name_dropdown");
const name_dropdown_ustensils = document.getElementById(
  "name_dropdown_ustensils"
);
const buttonValues = document.getElementById("buttonValues");

function dropdownApplaince() {
  for (let i = 0; i < data.length; i++) {
    const optionNames = document.createElement("option");
    optionNames.textContent = data[i].appliance;
    optionNames.value = data[i].appliance;
    name_dropdown.appendChild(optionNames);
  }
  document.addEventListener("input", function (event) {
    // console.log(filterIngredients(data, event.target.value));

    createRecipe(filterAppliance(data, event.target.value));
    //CREATE A BUTTON FOR DELETING THE LI
    const buttonValue = document.createElement("button");
    buttonValue.textContent = event.target.value;
    buttonValue.addEventListener("click", (e) => {
      document.querySelector("li").remove();
    });

    buttonValues.appendChild(buttonValue);
  });
}
dropdownApplaince();

function dropdownUstensils() {
  for (let i = 0; i < data.length; i++) {
    const optionNames = document.createElement("option");
    // console.log(data[i].ustensils);
    for (let y = 0; y < data[i].ustensils.length; y++) {
      // console.log(data[i].ustensils[y]);
      optionNames.textContent = data[i].ustensils[y];
      optionNames.value = data[i].ustensils[y];
      name_dropdown_ustensils.appendChild(optionNames);
    }
  }
  document.addEventListener("input", function (event) {
    // console.log(filterUstensils(data, event.target.value));

    createRecipe(filterUstensils(data, event.target.value));
    //CREATE A BUTTON FOR DELETING THE LI
    const buttonValue = document.createElement("button");
    buttonValue.textContent = event.target.value;
    buttonValue.addEventListener("click", (e) => {
      document.querySelector("li").remove();
    });

    buttonValues.appendChild(buttonValue);
  });
}
dropdownUstensils();

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
      .includes("Jus de citron")
  );
}

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
    console.log(toto);
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
