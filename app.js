import { data } from "./data.js";

const recipes = document.getElementById("recipes");
const name_dropdown = document.getElementById("name_dropdown");

console.log(data);

const filterName = data.filter((recipe) =>
  recipe.name.toLowerCase().includes("coco")
);
console.log(filterName);
const filterAppliance = filterName.filter((recipe) =>
  recipe.appliance.toLowerCase().includes("blender")
);
console.log(filterAppliance);

function createRecipe() {
  for (let i = 0; i < filterName.length; i++) {
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

    nameFirstLine.textContent = data[i].name;
    spanLogoClock.innerHTML = '<i class="far fa-clock"></i>';
    spanTime.textContent = data[i].time;
    spanTimeMin.textContent = "min";

    const toto = data[i].ingredients.map((ingredient) => ingredient.ingredient);
    // console.log(toto)
    liIngredient.textContent = toto;

    spanDescription.textContent = data[i].description;

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


function dropdown() {
  for (let i = 0; i < data.length; i++) {
    const optionNames = document.createElement("option");
    optionNames.textContent = data[i].name;
    optionNames.value = data[i].name;
    name_dropdown.appendChild(optionNames);

    document.addEventListener(
      "input",
      function (event) {
        // Only run for #wizard select
        if (event.target.id !== "name_dropdown") return;

        if (event.target.value === event.target.value) {
          console.log(event.target.value);
        }
      },
      false
    );
  }
}
dropdown();
