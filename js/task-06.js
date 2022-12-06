// 1.під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// 2.   кількість символів в інпуті  в його атрибуті data-length.
//     3. кількість символів правильна  border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// 4. Для додавання стилів valid і invalid

const inputText = document.querySelector(`#validation-input`);
const controlValue = Number(inputText.getAttribute('data-length'));

inputText.addEventListener(`blur`, (event) => {
  if (event.target.value.length === controlValue) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  } else {
    inputText.classList.add('invalid');
    inputText.classList.remove('valid');
  }
});
