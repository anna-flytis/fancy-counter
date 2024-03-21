const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');

const counterValueEl = document.querySelector('.counter__value');

resetButtonEl.addEventListener('click', function(){
  counterValueEl.textContent = 0;
})

decreaseButtonEl.addEventListener('click', function() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber =+currentValue;
  const newValue = currentValueAsNumber - 1;
  counterValueEl.textContent = newValue;
})

increaseButtonEl.addEventListener('click', function(){
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber =+currentValue;
  if (currentValue >= 5 ){

  } else {
      const newValue = currentValueAsNumber + 1;
      counterValueEl.textContent = newValue;
  }
})