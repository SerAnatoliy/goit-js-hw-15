function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  input: document.querySelector("input"),
  collection: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", () => {
  createBoxes(Number(refs.input.value));
});

function createBoxes(amount) {
  let startWidth = 30;
  let startHeight = 30;
  let arrDivs = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${startWidth}px`;
    div.style.height = `${startHeight}px`;
    div.style.backgroundColor = getRandomHexColor();

    startWidth += 10;
    startHeight += 10;

    arrDivs.push(div);
  }

  refs.collection.append(...arrDivs);
}

refs.destroy.addEventListener("click", () => {
  refs.collection.innerHTML = "";
  refs.input.value = "";
});