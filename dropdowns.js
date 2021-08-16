const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");

//----DROPDOWNS FUNCTIONS { dropdownApplaince(array), dropdownUstensils(array), dropdownIngredients(array) }----
export function dropdownAppliance(data) {
  
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
    appliance_dropdown.appendChild(optionNames);
  }

  // const $searchBar = document.createElement("input");
  // appliance_dropdown.appendChild($searchBar);

  // $searchBar.addEventListener("keyup", (event) => {
  //   const searchString = event.target.value;
  //   if (searchString.length > 2) {
  //     const filteredSearch = arrifySetApplianceArray.filter((filter) => {
  //       return filter.includes(searchString);
  //     });
  //     // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
  //     console.log(filteredSearch)

  //   }
  // });
}

export function dropdownUstensils(data) {
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
    ustensils_dropdown.appendChild(optionNames);
  }
}

export function dropdownIngredients(data) {
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
    ingredients_dropdown.appendChild(optionNames);
  }
}


