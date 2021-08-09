import { data } from "./data.js";

const recipes = document.getElementById("recipes");
const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");
// const buttonValues = document.getElementById("buttonValues");
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
createRecipe(filteredArray);

//----RESET THEN CREATE THE DISPLAY OF THE VISUAL----
function displayRecipe(array) {
  recipes.innerHTML = "";
  createRecipe(array);
}

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
  let aaa = data;
  for (let i = 0; i < buttonFilteringByAppliance.length; i++) {
    aaa = filterAppliance(aaa, buttonFilteringByAppliance[i]);
  }
  for (let i = 0; i < buttonFilteringByUstensils.length; i++) {
    aaa = filterUstensils(aaa, buttonFilteringByUstensils[i]);
  }
  for (let i = 0; i < buttonFilteringByIngredients.length; i++) {
    aaa = filterIngredients(aaa, buttonFilteringByIngredients[i]);
  }
  console.log(aaa);
}

//----CALLING ACTIONS----
// appliance_dropdown.addEventListener("input", function (event) {
//   //  console.log(filterAppliance(filteredArray, event.target.value));
//   filteredArray = filterAppliance(filteredArray, event.target.value);
//   displayRecipe(filteredArray);
//   //CREATE A BUTTON
//   const buttonValue = document.createElement("button");
//   buttonValue.style.color = "green";
//   buttonValue.textContent = event.target.value;
//   buttonFilteringByAppliance.push(event.target.value);
//   console.log(buttonFilteringByAppliance);

//   buttonValue.addEventListener("click", (e) => {
//     // FilteringAll();
//     console.log(event.target.value);
//     buttonValue.remove();
//     buttonFilteringByAppliance = buttonFilteringByAppliance.filter((n) => {
//       return n != event.target.value;
//     });
//     console.log(buttonFilteringByAppliance);
//   });
//   buttonValues.appendChild(buttonValue);
// });

// ustensils_dropdown.addEventListener("input", function (event) {
//   // console.log(filterUstensils(filteredArray, event.target.value));
//   filteredArray = filterUstensils(filteredArray, event.target.value);
//   displayRecipe(filteredArray);
//   //CREATE A BUTTON
//   const buttonValue = document.createElement("button");
//   buttonValue.style.color = "orange";
//   buttonValue.textContent = event.target.value;
//   buttonFilteringByUstensils.push(event.target.value);
//   buttonValue.addEventListener("click", (e) => {
//     FilteringAll();
//   });
//   buttonValues.appendChild(buttonValue);
// });

// ingredients_dropdown.addEventListener("input", function (event) {
//   // console.log(filterIngredients(filteredArray, event.target.value));
//   filteredArray = filterIngredients(filteredArray, event.target.value);
//   displayRecipe(filteredArray);
//   //CREATE A BUTTON
//   const buttonValue = document.createElement("button");
//   buttonValue.style.color = "blue";
//   buttonValue.textContent = event.target.value;
//   buttonFilteringByIngredients.push(event.target.value);
//   buttonValue.addEventListener("click", (e) => {
//     FilteringAll();
//   });
//   buttonValues.appendChild(buttonValue);
// });

//----FUNCTION IN ORDER TO OPEN AND CLOSE THE BUTTONS OF FILTER DROPDOWNS----
function toggleApplianceDropdown(value) {
  let totoUlToggle = document.getElementById(value);
  if (totoUlToggle.style.display === "none") {
    totoUlToggle.style.display = "grid";
  } else {
    totoUlToggle.style.display = "none";
  }
}

//----STYLING THE DROPDOWNS----
//----APPLIANCE----
appliance_dropdown.style.display = "none";
appliance_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("appliance_dropdown");
});
appliance_dropdown.addEventListener("click", function (event) {
  filteredArray = filterAppliance(filteredArray, event.target.value);
  displayRecipe(filteredArray);
});
//----USTENSILS----
ustensils_dropdown.style.display = "none";
ustensils_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ustensils_dropdown");
});
ustensils_dropdown.addEventListener("click", function (event) {
  filteredArray = filterUstensils(filteredArray, event.target.value);
  displayRecipe(filteredArray);
});
//----INGREDIENTS----
ingredients_dropdown.style.display = "none";
ingredients_dropdown_button.addEventListener("click", () => {
  toggleApplianceDropdown("ingredients_dropdown");
});
ingredients_dropdown.addEventListener("click", function (event) {
  filteredArray = filterIngredients(filteredArray, event.target.value);
  displayRecipe(filteredArray);
});

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
