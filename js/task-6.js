function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes();
  if (amount >= 1 && amount <= 100) {
    let j = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.classList.add('box-item');
      boxes.append(div);
      div.style.width = `${j}px`;
      div.style.height = `${j}px`;
      div.style.backgroundColor = getRandomHexColor();
      j += 10;
    }
    controls.firstElementChild.value = null;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

btnCreate.addEventListener('click', event => {
  const amount = Number(controls.firstElementChild.value);
  createBoxes(amount);
});
btnDestroy.addEventListener('click', e => {
  destroyBoxes();
});
