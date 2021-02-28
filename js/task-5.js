// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// #1
// const refs = {
//   input: document.querySelector('#name-input'),
//   nameLabel: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
// };

// #2
// const userInput = document.querySelector('#name-input');
// const greetOutput = document.querySelector('#name-output');

// const greeting = (inputEvent) => {
//     greetOutput.textContent = inputEvent.target.value ? inputEvent.target.value : 'незнакомец';    
// }
// userInput.addEventListener('input', greeting);

// #3
const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (refs.input.value === "") {
    refs.nameLabel.textContent = "незнакомец";
  } else {
    refs.nameLabel.textContent = event.currentTarget.value;
  };
};
