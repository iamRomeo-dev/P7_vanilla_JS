import { data } from "./data.js";
import { filterRecipes } from "./filterRecipes.js";

describe("filterRecipes", () => {
  it("should filter by ingredient", () => {
    const filteredRecipes = filterRecipes(data, {
      appliances: [],
      ustensils: [],
      ingredients: ["Lait de coco"],
    });

    expect(filteredRecipes).toStrictEqual([
      {
        id: 1,
        name: "Limonade de Coco",
        servings: 1,
        ingredients: [
          {
            ingredient: "Lait de coco",
            quantity: 400,
            unit: "ml",
          },
          {
            ingredient: "Jus de citron",
            quantity: 2,
          },
          {
            ingredient: "Crème de coco",
            quantity: 2,
            unit: "cuillères à soupe",
          },
          {
            ingredient: "Sucre",
            quantite: 30,
            unit: "grammes",
          },
          {
            ingredient: "Glaçons",
          },
        ],
        time: 10,
        description:
          "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        appliance: "Blender",
        ustensils: ["cuillère à Soupe", "verres", "presse citron"],
      },
      {
        id: 3,
        name: "Poulet coco réunionnais",
        servings: 4,
        ingredients: [
          {
            ingredient: "Poulet",
            quantity: 1,
          },
          {
            ingredient: "Lait de coco",
            quantity: 400,
            unit: "ml",
          },
          {
            ingredient: "Coulis de tomate",
            quantity: 25,
            unit: "cl",
          },
          {
            ingredient: "Oignon",
            quantity: 1,
          },
          {
            ingredient: "Poivron rouge",
            quantity: 1,
          },
          {
            ingredient: "Huile d'olive",
          },
        ],
        time: 80,
        description:
          "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        appliance: "Cocotte",
        ustensils: ["couteau"],
      },
    ]);
  });
});
