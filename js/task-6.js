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
// const validationBtnRef = document.getElementById("validation-input").onblur = function() {
//   console.log(validationBtnRef.value.length);
//   if (validationBtnRef.getAttribute('data-length') > validationBtnRef.value.length) { 
//     validationBtnRef.classList.remove('valid');
//     validationBtnRef.classList.add('invalid');
//   } else {
//     validationBtnRef.classList.remove('invalid');
//     validationBtnRef.classList.add('valid');
//   };
// };

// #2
// const validationBtnRef = document.querySelector('#validation-input');
// validationBtnRef.addEventListener('blur', onBlurCheck);
// const validBtnClassList = validationBtnRef.classList;
// function onBlurCheck(event) {
//   if (
//     validationBtnRef.value.length === Number(validationBtnRef.dataset.length)
//   ) {
//     validBtnClassList.add('valid');
//     validBtnClassList.remove('invalid');
//   } else {
//     validBtnClassList.remove('valid');
//     validBtnClassList.add('invalid');
//     };
// };


// #3
const validationBtnRef = document.querySelector("#validation-input");
validationBtnRef.addEventListener("blur", checkValidation);

function checkValidation() {
  if (validationBtnRef.value.length === Number(validationBtnRef.dataset.length)) {
    validationBtnRef.classList.add("valid");
    validationBtnRef.classList.remove("invalid");
  } else {
    validationBtnRef.classList.add("invalid");
    validationBtnRef.classList.remove("valid");
    };
};