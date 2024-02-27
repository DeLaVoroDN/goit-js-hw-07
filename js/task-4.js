// Получаем ссылку на форму входа из DOM
const registerForm = document.querySelector('.login-form');

// Функция-обработчик отправки формы
function submitHandler(event) {
  // Предотвращаем стандартное поведение формы (перезагрузку страницы)
  event.preventDefault();

  // Получаем ссылку на форму из события
  const form = event.target;

  // Получаем значения полей email и password из формы
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Проверяем, что оба поля заполнены
  if (email === '' || password === '') {
    // Если хотя бы одно поле пустое, выводим предупреждение и завершаем выполнение функции
    return alert('All form fields must be filled in');
  }

  // Создаем объект пользователя, содержащий email и password
  const user = {
    [form.elements.email.name]: email.trim(), // email, обрезанный от лишних пробелов
    [form.elements.password.name]: password.trim(), // password, обрезанный от лишних пробелов
  };

  // Выводим объект пользователя в консоль (в реальном приложении можно отправить его на сервер)
  console.log(user);

  // Очищаем поля формы
  form.reset();
}

// Добавляем обработчик события "submit" на форму входа
registerForm.addEventListener('submit', submitHandler);
