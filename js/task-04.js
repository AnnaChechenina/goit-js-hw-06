// 1. Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких
// збільшуй або зменшуй значення лічильника.
// 3.Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const buttonCounter = document.querySelector(`#value`);
const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);

buttonDecrement.addEventListener(`click`, () => {
  counterValue -= 1;
  buttonCounter.textContent = counterValue;
});
buttonIncrement.addEventListener(`click`, () => {
  counterValue += 1;
  buttonCounter.textContent = counterValue;
});
