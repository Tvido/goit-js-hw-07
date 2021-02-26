// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   };
// };


const validationBtnRef = document.querySelector('#validation-input');
validationBtnRef.addEventListener('blur', onBlurCheck);
const validBtnClassList = validationBtnRef.classList;
function onBlurCheck(event) {
  if (
    validationBtnRef.value.length === Number(validationBtnRef.dataset.length)
  ) {
    validBtnClassList.add('valid');
    validBtnClassList.remove('invalid');
  } else {
    validBtnClassList.remove('valid');
    validBtnClassList.add('invalid');
    };
};