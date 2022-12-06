// реагує на зміну значення input#font - size - control(подія input)
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputValue = document.querySelector('#font-size-control');
const spanValue = document.querySelector('#text');

inputValue.addEventListener(`input`, onInputValueChange);

function onInputValueChange(event) {
  spanValue.style.fontSize = `${event.currentTarget.value}px`;
}
