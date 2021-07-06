// given an ingredient list from 2 bakery's and a recipe list
// return the recipe that has one ingredient form each bakery

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (const recipe in recipes) {
    const ingredientList = recipes[recipe].ingredients;

    if (
      (bakeryA.includes(ingredientList[0]) ||
        bakeryA.includes(ingredientList[1])) &&
      (bakeryB.includes(ingredientList[0]) ||
        bakeryB.includes(ingredientList[1]))
    ) {
      return recipes[recipe].name;
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
