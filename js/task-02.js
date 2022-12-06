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

const ingredientsRef = document.querySelector('#ingredients');

const addIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const newIngredientRef = document.createElement('li');
    newIngredientRef.textContent = ingredient;
    newIngredientRef.classList.add('item');
    return newIngredientRef;
  });
};

const elements = addIngredients(ingredients);
ingredientsRef.append(...elements);
console.log(ingredientsRef);
