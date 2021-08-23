const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");

//----DROPDOWNS FUNCTIONS { dropdownApplaince(array), dropdownUstensils(array), dropdownIngredients(array) }----
export function dropdownAppliance(data) {
  const applianceContainer = document.createElement("div");
  applianceContainer.id = "appliance-container";
  appliance_dropdown.appendChild(applianceContainer);
  let applianceArray = [];
  // SET THEN ARRIFY THE DATAS
  for (let y = 0; y < data.length; y++) {
    applianceArray.push(data[y].appliance);
  }
  let setApplianceArray = new Set(applianceArray);
  let arrifySetApplianceArray = Array.from(setApplianceArray);
  //  console.log(arrifySetApplianceArray);
  for (let i = 0; i < arrifySetApplianceArray.length; i++) {
    const optionNames = document.createElement("button");
    optionNames.textContent = arrifySetApplianceArray[i];
    optionNames.value = arrifySetApplianceArray[i];
    applianceContainer.appendChild(optionNames);
  }

  dropdownSearchBar(arrifySetApplianceArray, applianceContainer, appliance_dropdown, "appliance_searchBar", "appliance");
}

export function dropdownUstensils(data) {
  const ustensilContainer = document.createElement("div");
  ustensilContainer.id = "ustensil-container";
  ustensils_dropdown.appendChild(ustensilContainer);
  let ustensilArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ustensils.length; y++) {
      ustensilArray.push(data[i].ustensils[y]);
    }
  }
  let setUstensilArray = new Set(ustensilArray);
  let arrifySetUstensilArray = Array.from(setUstensilArray);
  for (let i = 0; i < arrifySetUstensilArray.length; i++) {
    const optionNames = document.createElement("button");
    optionNames.textContent = arrifySetUstensilArray[i];
    optionNames.value = arrifySetUstensilArray[i];
    ustensilContainer.appendChild(optionNames);
  }

  dropdownSearchBar(arrifySetUstensilArray, ustensilContainer, ustensils_dropdown, "ustensil_searchBar", "ustensil");
}

export function dropdownIngredients(data) {
  const ingredientContainer = document.createElement("div");
  ingredientContainer.id = "ingredient-container";

  ingredients_dropdown.appendChild(ingredientContainer);
  let ingredientArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].ingredients.length; y++) {
      ingredientArray.push(data[i].ingredients[y].ingredient);
    }
  }
  let setIngredientArray = new Set(ingredientArray);
  let arrifySetIngredientArray = Array.from(setIngredientArray);
  for (let i = 0; i < arrifySetIngredientArray.length; i++) {
    const optionNames = document.createElement("button");
    optionNames.textContent = arrifySetIngredientArray[i];
    optionNames.value = arrifySetIngredientArray[i];
    ingredientContainer.appendChild(optionNames);
  }

  dropdownSearchBar(arrifySetIngredientArray, ingredientContainer, ingredients_dropdown, "ingredient_searchBar", "ingredient");
}

function dropdownSearchBar(array, area, position, id, placeholder) {
  const $searchBar = document.createElement("input");
  $searchBar.type = "search";
  $searchBar.id = id;
  $searchBar.placeholder = "Rechercher par " + placeholder
  position.appendChild($searchBar);
  $searchBar.addEventListener("keyup", (event) => {
    const searchString = event.target.value;
    if (searchString.length > 2) {
      const filteredSearch = array.filter((filter) => {
        return filter.includes(searchString);
      });
      // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
      console.log(filteredSearch);
      const optionNames = document.createElement("button");
      optionNames.textContent = filteredSearch;
      optionNames.value = filteredSearch;
      area.innerHTML = "";

      area.appendChild(optionNames);
    }
    // console.log(searchString)
    if (searchString === "") {
      area.innerHTML = "";

      for (let i = 0; i < array.length; i++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = array[i];
        optionNames.value = array[i];
        area.appendChild(optionNames);
      }
    }
  });
}
