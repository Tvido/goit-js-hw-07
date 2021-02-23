const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsArray = ingredients.map(ingredient => {
  const newListRef = document.createElement('li');
  newListRef.textContent = ingredient;
  return newListRef;
});

ingredientsList.append(...ingredientsArray);