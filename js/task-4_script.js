/* let counterValue = 0;

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
  increment();
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", function () {
  decrement();
  valueEl.textContent = counterValue;
});
 */
const valueRef = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = +valueRef.textContent;

function decrementCb() {
	counterValue -= 1;
	valueRef.textContent = counterValue;
}
function incrementCb() {
	counterValue += 1;
	valueRef.textContent = counterValue;
}

decrement.addEventListener('click', decrementCb);
increment.addEventListener('click', incrementCb);

