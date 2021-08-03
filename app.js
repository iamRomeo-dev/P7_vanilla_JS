import { data } from "./data.js";

const myTab = [1, 17, 27, 15, 9, 35];
console.log("1");
console.log(myTab);
console.log(data);

function min10(list) {
  return list.filter((val) => val >= 10);
}
console.log("2");

console.log(min10(myTab));
console.log(filterAppliance(data));

function max20(list) {
  return list.filter((val) => val <= 20);
}
console.log("3");
console.log(max20(myTab));
console.log(filterUstensils(data));

const filtersTest = [min10, max20];
const filtersTestRealDataArray = [filterAppliance, filterUstensils];

let dataaa = myTab;
let rataaa = data;

filtersTest.forEach((filterFunction) => {
  dataaa = filterFunction(dataaa);
});

filtersTestRealDataArray.forEach((filterFunctionn) => {
  rataaa = filterFunctionn(rataaa);
});
console.log("4");
console.log(dataaa);
console.log(rataaa);





const recipes = document.getElementById("recipes");
const name_dropdown = document.getElementById("name_dropdown");
const name_dropdown_ustensils = document.getElementById(
  "name_dropdown_ustensils"
);
const name_dropdown_ingredients = document.getElementById(
  "name_dropdown_ingredients"
);
const buttonValues = document.getElementById("buttonValues");

//----FILTER FUNCTIONS { filterAppliance, filterUstensils, filterIngredients }----
//APPLIANCE
function filterAppliance(data) {
  return data.filter((recipe) => recipe.appliance.includes("Blender"));
}

const mafonction = (data) => {
  return filterAppliance(data, "coco");
};

//USTENSILS
function filterUstensils(data) {
  return data.filter((recipe) => recipe.ustensils.includes("presse citron"));
}

//INGREDIENTS
function filterIngredients(data, value) {
  return data.filter((recipe) =>
    recipe.ingredients
      .map((ingredient) => ingredient.ingredient)
      .includes(value)
  );
}

//----DROPDOWNS FUNCTIONS { dropdownApplaince, dropdownUstensils, dropdownIngredients }----
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

function dropdownIngredients() {
  for (let i = 0; i < data.length; i++) {
    const optionNames = document.createElement("option");
    // console.log(data[i].ustensils);
    for (let y = 0; y < data[i].ingredients.length; y++) {
      //  console.log(data[i].ingredients[y].ingredient);
      optionNames.textContent = data[i].ingredients[y].ingredient;
      optionNames.value = data[i].ingredients[y].ingredient;
      name_dropdown_ingredients.appendChild(optionNames);
    }
  }
  name_dropdown_ingredients.addEventListener("input", function (event) {
    createRecipe(filterIngredients(data, event.target.value));

    //CREATE A BUTTON FOR DELETING THE LI
    const buttonValue = document.createElement("button");
    buttonValue.textContent = event.target.value;
    buttonValue.addEventListener("click", (e) => {
      document.querySelector("li").remove();
    });

    buttonValues.appendChild(buttonValue);
  });
}

//----FUNCTIONS DECLARATIONS----
dropdownApplaince();
dropdownUstensils();
dropdownIngredients();

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
