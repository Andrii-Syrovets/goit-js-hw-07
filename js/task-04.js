// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати
// значення лічильника на `1`.

// - Створи змінну `counterValue` в якій буде зберігається поточне значення
//     лічильника.
// - Створи функції `increment` і `decrement` для збільшення і зменшення значення
//     лічильника.
// - Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
  
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');

const increment = () => {
    return counterValue.textContent = +counterValue.textContent + 1;
};

const decrement = () => {
    return counterValue.textContent = +counterValue.textContent - 1;
};

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);


