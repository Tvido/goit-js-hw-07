// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

// #1
// const validationRef = document.getElementById("validation-input").onblur = function() {
//   console.log(validationRef.value.length);
//   if (validationRef.getAttribute('data-length') > validationRef.value.length) { 
//     validationRef.classList.remove('valid');
//     validationRef.classList.add('invalid');
//   } else {
//     validationRef.classList.remove('invalid');
//     validationRef.classList.add('valid');
//   };
// };

// #2
// const validationRef = document.querySelector('#validation-input');
// validationRef.addEventListener('blur', onBlurCheck);
// const validBtnClassList = validationRef.classList;
// function onBlurCheck(event) {
//   if (
//     validationRef.value.length === Number(validationRef.dataset.length)
//   ) {
//     validBtnClassList.add('valid');
//     validBtnClassList.remove('invalid');
//   } else {
//     validBtnClassList.remove('valid');
//     validBtnClassList.add('invalid');
//     };
// };


// #3
const validationRef = document.querySelector("#validation-input");
validationRef.addEventListener("blur", checkValidation);

function checkValidation() {
  if (validationRef.value.length === Number(validationRef.dataset.length)) {
    validationRef.classList.add("valid");
    validationRef.classList.remove("invalid");
  } else {
    validationRef.classList.add("invalid");
    validationRef.classList.remove("valid");
    };
};