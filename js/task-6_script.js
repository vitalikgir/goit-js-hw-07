const inputEl = document.querySelector("#validation-input");

console.log(inputEl.dataset.length);

function lengthCheck(event) {
  inputEl.classList.add("invalid");
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.replace("invalid", "valid");
  }
}

inputEl.addEventListener("blur", lengthCheck);
