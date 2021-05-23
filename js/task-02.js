const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const createEl = ingredients.map((ingredient) => {
    const liElement = document.createElement('li');
    liElement.textContent = ingredient;
    return liElement;
})

// console.log(createEl)

const addEl = document.querySelector('ul');
addEl.append(...createEl)

