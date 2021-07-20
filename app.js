import { data } from "./data.js";

const recipes = document.getElementById("recipes");
console.log(data);

function createRecipe(data) {
  for (let i = 0; i < data.length; i++) {
    //Create a li
    const li = document.createElement("li");

    const recipe_photo = document.createElement("div");
    recipe_photo.classList.add("recipe_photo");
    const recipe_figcaption = document.createElement("div");
    recipe_figcaption.classList.add("recipe_figcaption");

    //Create a div for the first line
    const divFirstLine = document.createElement("div");

    //Recipe name
    const h2Name = document.createElement("h2");
    h2Name.textContent = data[i].name;
    h2Name.classList.add("my-class");

    //Recipe Time
    const spanFirstLine = document.createElement("span");
    //Clock icon
    const spanLogoClock = document.createElement("span");
    spanLogoClock.innerHTML = ' <i class="far fa-clock"></i>';
    //Time
    const spanTime = document.createElement("span");
    spanTime.textContent = data[i].time;
    spanFirstLine.appendChild(spanLogoClock);
    spanFirstLine.appendChild(spanTime);

    //Put the h1 and h2 inside the div -> and put to div a class
    divFirstLine.classList.add("divFirstLine");
    divFirstLine.appendChild(h2Name);
    divFirstLine.appendChild(spanFirstLine);


    recipe_figcaption.appendChild(divFirstLine);

    //
    // const h1 = document.createElement("h2");
    // h1.textContent = data[i].name;
    // h1.classList.add("my-class");

    //Put the div inside the li
    li.classList.add("li");
    li.appendChild(recipe_photo);
    li.appendChild(recipe_figcaption);
    

    //Put the li inside the ul inside the html dom
    recipes.classList.add("Aaa_recipes_container");
    recipes.appendChild(li);
  }
}

createRecipe(data);
