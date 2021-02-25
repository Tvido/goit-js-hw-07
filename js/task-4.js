// counterValue 

const counterValue = document.querySelector('#value');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

const increase = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrease = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);