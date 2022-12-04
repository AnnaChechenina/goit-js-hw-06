    // Створить окремий елемент <li> метод document.createElement().
      // Додасть назву інгредієнта як його текстовий вміст.
    // Додасть елементу клас item.
    //вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  
  
const addIngredientsRef = () => {
  const allIngredients = document.querySelector(`#ingredients`);
  for (const ingredient of ingredients) {
    const newIngredient = document.createElement(`li`);
    newIngredient.textContent = ingredient;
    allIngredients.append(newIngredient);
  }
  console.log(`allIngredient`);
};
addIngredientsRef();



