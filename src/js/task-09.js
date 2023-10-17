function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  colorName: document.querySelector(".color"),
  body: document.querySelector('body'),

};

refs.button.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  refs.colorName.textContent = newColor;
  refs.body.style.backgroundColor = `${newColor}`
}