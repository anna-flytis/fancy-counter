const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');

const counterValueEl = document.querySelector('.counter__value');

resetButtonEl.addEventListener('click', function(){
  counterValueEl.textContent = 0;
})

function incrementCounter() {
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber =+currentValue;
  let newValue = currentValueAsNumber + 1;
      
  if (newValue >= 5 ){
    newValue = 5;
    
  } 
  counterValueEl.textContent = newValue;
}



decreaseButtonEl.addEventListener('click', function() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber =+currentValue;
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0){
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
})

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);

