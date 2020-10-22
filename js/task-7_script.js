const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeFont(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeControl.addEventListener("input", changeFont);
