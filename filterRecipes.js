export const getAllAppliances = (recipes) => {
  const appliances = new Set();
  recipes.forEach((recipe) => {
    appliances.add(recipe.appliance);
  });
  return appliances;
};

export const getAllUstensils = (recipes) => {
  const ustensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.add(ustensil);
    });
  });
  return ustensils;
};

export const getAllIngredients = (recipes) => {
  const ingredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach(({ ingredient }) => {
      ingredients.add(ingredient);
    });
  });
  return ingredients;
};

const filterByApplicances = (appliances, recipe) => {
  if (appliances.length === 0) {
    return true;
  }
  return appliances.includes(recipe.appliance);
};

const filterByUstensils = (ustensils, recipe) => {
  if (ustensils.length === 0) {
    return true;
  }
  return recipe.ustensils.every((ustensil) => ustensils.includes(ustensil));
};

const filterByIngredients = (ingredients, recipe) => {
  if (ingredients.length === 0) {
    return true;
  }
  return recipe.ingredients.some(({ ingredient }) =>
    ingredients.includes(ingredient)
  );
};

export const filterRecipes = (
  recipes,
  { appliances, ustensils, ingredients }
) => {
  return recipes
    .filter((recipe) => filterByApplicances(appliances, recipe))
    .filter((recipe) => filterByUstensils(ustensils, recipe))
    .filter((recipe) => filterByIngredients(ingredients, recipe));
};
