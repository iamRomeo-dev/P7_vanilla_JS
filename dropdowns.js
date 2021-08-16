const appliance_dropdown = document.getElementById("appliance_dropdown");
const ustensils_dropdown = document.getElementById("ustensils_dropdown");
const ingredients_dropdown = document.getElementById("ingredients_dropdown");


//----DROPDOWNS FUNCTIONS { dropdownApplaince(array), dropdownUstensils(array), dropdownIngredients(array) }----
  export function dropdownAppliance(data) {
    let applianceArray = []
    // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
    for (let y = 0; y < data.length; y++) {
      applianceArray.push(data[y].appliance);
    }
    let setApplianceArray = new Set(applianceArray);

    // LOOP AND CREATE THE APPLIANCE DROPDOWN LIST
    for (let i = 0;  i< setApplianceArray.length; i++) {
      const applianceOption = document.createElement("button");
      applianceOption.textContent = setApplianceArray[i];
      applianceOption.value = setApplianceArray[i];
    
      appliance_dropdown.appendChild(applianceOption);
    }

  }
  export function dropdownUstensils(data) {
    for (let i = 0; i < data.length; i++) {
      for (let y = 0; y < data[i].ustensils.length; y++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = data[i].ustensils[y];
        optionNames.value = data[i].ustensils[y];
        ustensils_dropdown.appendChild(optionNames);
      }
    }
  }
  export function dropdownIngredients(data) {
    for (let i = 0; i < data.length; i++) {
      for (let y = 0; y < data[i].ingredients.length; y++) {
        const optionNames = document.createElement("button");
        optionNames.textContent = data[i].ingredients[y].ingredient;
        optionNames.value = data[i].ingredients[y].ingredient;
        ingredients_dropdown.appendChild(optionNames);
      }
    }
  }


