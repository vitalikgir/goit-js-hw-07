const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const elements = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  return listItemEl;
});

const listEl = document.querySelector("#ingredients");

listEl.append(...elements);
