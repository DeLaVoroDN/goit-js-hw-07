// Получаем ссылку на элемент ввода имени из DOM
const nameInput = document.querySelector('input#name-input');

// Получаем ссылку на элемент вывода имени из DOM
const output = document.querySelector('span#name-output');

// Добавляем обработчик события "input" для поля ввода имени
nameInput.addEventListener('input', event => {
  // Проверяем, не пустое ли значение в поле ввода
  if (event.target.value.trim() !== '') {
    // Если значение не пустое, устанавливаем содержимое элемента вывода равным значению из поля ввода
    output.textContent = event.target.value;
  } else {
    // Если значение пустое, устанавливаем содержимое элемента вывода как "Anonymous"
    output.textContent = 'Anonymous';
  }
});
