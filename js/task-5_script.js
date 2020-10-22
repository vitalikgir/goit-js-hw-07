const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

// function onInputChange() {
//   event.currentTarget.value !== ""
//     ? (nameEl.textContent = event.currentTarget.value)
//     : (nameEl.textContent = "незнакомец");
//   console.dir(event.currentTarget);
// }
/* function outputCb(event) {
  outputRef.textContent = event.target.value || 'незнакомец';
}

inputRef.addEventListener('input', outputCb);
 */
function onInputChange(e) {
  const { value } = e.target;
  nameEl.textContent = value !== "" ? value : "незнакомец";
  console.dir(e.target);
}

inputEl.addEventListener("input", onInputChange);
