const refs = {
  counter: document.querySelector("#controls input"),
  createBtn: document.querySelector("#controls button[data-action='render']"),
  destroyBtn: document.querySelector("#controls button[data-action='destroy']"),
  boxesContainer: document.querySelector("#boxes"),
};

function createBoxes() {
  for (let i = 0; i < Number(refs.counter.value); i += 1) {
    let boxes = [];
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * (255 - 0) + 0
    )}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(
      Math.random() * (255 - 0) + 0
    )})`;
    boxes.push(box);
    refs.boxesContainer.append(...boxes);
  }
}

function destroyBoxes() {
  const removeEl = refs.boxesContainer.querySelectorAll("div");
  for (let i = 0; i < removeEl.length; i += 1) {
    refs.boxesContainer.removeChild(removeEl[i]);
  }
}
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
