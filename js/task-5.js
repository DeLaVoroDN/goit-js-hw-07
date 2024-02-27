// Функция для генерации случайного цвета в формате HEX
function getRandomHexColor() {
  // Генерируем случайное число от 0 до 16777215 (это максимальное число HEX цвета без учета прозрачности)
  const randomColor = Math.floor(Math.random() * 16777215);
  // Преобразуем случайное число в строку HEX и добавляем символ # в начале
  return `#${randomColor.toString(16).padStart(6, '0')}`;
}

// Получаем ссылку на тело документа
const body = document.querySelector('body');
// Получаем ссылку на кнопку "Change Color"
const button = document.querySelector('.change-color');
// Получаем ссылку на элемент, который будет показывать текущий цвет
const span = document.querySelector('.color');

// Функция для обработки клика на кнопку
function changeColorHandler() {
  // Генерируем случайный цвет
  const outputColor = getRandomHexColor();
  // Устанавливаем цвет фона тела документа равным сгенерированному цвету
  body.style.backgroundColor = outputColor;
  // Выводим сгенерированный цвет в текст элемента span
  span.textContent = outputColor;
}

// Добавляем обработчик события "click" на кнопку "Change Color"
button.addEventListener('click', changeColorHandler);
