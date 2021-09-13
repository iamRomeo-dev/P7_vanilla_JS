export function renderRecipe(recipe) {
  const $recipeListItem = document.createElement("li");
  $recipeListItem.className = "recipe-list-item";

  const $recipeListItemPicture = document.createElement("div");
  $recipeListItemPicture.className = "recipe-list-item__picture";
  $recipeListItem.appendChild($recipeListItemPicture);

  const $recipeListItemContent = document.createElement("div");
  $recipeListItemContent.className = "recipe-list-item__content";
  $recipeListItem.appendChild($recipeListItemContent);

  // <div>
  const $firstLine = document.createElement("div");
  $firstLine.className = "firstLine";
  $recipeListItemContent.appendChild($firstLine);

  const $recipeListItemTitle = document.createElement("h2");
  $recipeListItemTitle.className = "recipe-list-item__title";
  $recipeListItemTitle.textContent = recipe.name;
  $firstLine.appendChild($recipeListItemTitle);

  const $recipeListItemCookingTime = document.createElement("span");
  $recipeListItemCookingTime.className = "recipe-list-item__cooking-time";
  const $clockIcon = document.createElement("i");
  $clockIcon.className = "far fa-clock";
  $recipeListItemCookingTime.appendChild($clockIcon);
  $recipeListItemCookingTime.appendChild(
    document.createTextNode(`${recipe.time} min`)
  );
  $firstLine.appendChild($recipeListItemCookingTime);
  // </div>

  // <div>
  const $secondLine = document.createElement("div");
  $secondLine.className = "secondLine";
  $recipeListItemContent.appendChild($secondLine);

  const $recipeIngredientList = document.createElement("ul");
  $recipeIngredientList.className = "recipe-ingredient-list";
  $secondLine.appendChild($recipeIngredientList);
  recipe.ingredients.forEach(({ ingredient, quantity, unit }) => {
    const $recipeIngredientListItem = document.createElement("li");
    $recipeIngredientListItem.className = "recipe-ingredient-list-item";
    if (unit === undefined) {
      $recipeIngredientListItem.textContent = `${ingredient} : ${quantity}`;
    }
    if (quantity === undefined) {
      $recipeIngredientListItem.textContent = `${ingredient}`;
    }
    if (ingredient != undefined && quantity != undefined && unit != undefined) {
      $recipeIngredientListItem.textContent = `${ingredient} : ${quantity}${unit}`;
    }
    $recipeIngredientList.appendChild($recipeIngredientListItem);
  });

  const $recipeListItemDescription = document.createElement("p");
  $recipeListItemDescription.className = "recipe-list-item__description";
  $recipeListItemDescription.textContent = recipe.description;
  $secondLine.appendChild($recipeListItemDescription);
  // </div>

  return $recipeListItem;
}
