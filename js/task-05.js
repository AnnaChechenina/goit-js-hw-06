// в інпуті input#name - input(подія input),
// підставляє  поточне значення в span#name - output
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  textOutput.textContent = event.target.value;

  if (event.target.value === '') {
    textOutput.textContent = 'Anonymous';
  }
});
