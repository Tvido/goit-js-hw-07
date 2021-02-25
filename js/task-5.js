const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
};