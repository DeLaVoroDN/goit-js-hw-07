// Функция для генерации случайного цвета в формате HEX
function getRandomHexColor() {
  // Генерируем случайное число от 0 до 16777215 (это максимальное число HEX цвета без учета прозрачности)
  const randomColor = Math.floor(Math.random() * 16777215);
  // Преобразуем случайное число в строку HEX и добавляем символ # в начале
  return `#${randomColor.toString(16).padStart(6, '0')}`;
}

// Получаем ссылку на контейнер элементов управления
const controls = document.querySelector('#controls');
// Получаем ссылку на кнопку "Create"
const btnCreate = document.querySelector('[data-create]');
// Получаем ссылку на кнопку "Destroy"
const btnDestroy = document.querySelector('[data-destroy]');
// Получаем ссылку на контейнер для создания прямоугольных блоков
const boxes = document.querySelector('#boxes');

// Функция для создания прямоугольных блоков
function createBoxes(amount) {
  // Очищаем контейнер перед созданием новых блоков
  destroyBoxes();

  // Проверяем, что количество блоков находится в допустимом диапазоне от 1 до 100
  if (amount >= 1 && amount <= 100) {
    let j = 30;
    // Создаем блоки и добавляем их в контейнер
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.classList.add('box-item');
      boxes.append(div);
      // Устанавливаем случайный цвет и размер блока
      div.style.width = `${j}px`;
      div.style.height = `${j}px`;
      div.style.backgroundColor = getRandomHexColor();
      // Увеличиваем размер блока на 10 пикселей для следующего блока
      j += 10;
    }
    // Сбрасываем значение в поле ввода после создания блоков
    controls.firstElementChild.value = null;
  }
}

// Функция для удаления всех блоков из контейнера
function destroyBoxes() {
  // Очищаем содержимое контейнера
  boxes.innerHTML = '';
}

// Добавляем обработчик события "click" на кнопку "Create"
btnCreate.addEventListener('click', event => {
  // Получаем количество блоков из значения в поле ввода и вызываем функцию создания блоков
  const amount = Number(controls.firstElementChild.value);
  createBoxes(amount);
});

// Добавляем обработчик события "click" на кнопку "Destroy"
btnDestroy.addEventListener('click', e => {
  // Вызываем функцию для удаления всех блоков
  destroyBoxes();
});
