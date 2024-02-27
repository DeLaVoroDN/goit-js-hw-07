// Получаем все элементы с классом 'item' и сохраняем в переменную categories
const categories = document.querySelectorAll('.item');

// Выводим количество категорий, найденных на странице
console.log(`Number of categories: ${categories.length}`);

// Перебираем каждый элемент в списке категорий
categories.forEach(el => {
  // Выводим название категории, доступное в первом дочернем элементе каждого элемента
  console.log(`Category: ${el.firstElementChild.textContent}`);
  // Выводим количество элементов внутри каждой категории, доступное в последнем дочернем элементе каждого элемента
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
