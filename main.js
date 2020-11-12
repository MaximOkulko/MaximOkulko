const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(".key-layout");
const placeholder = document.getElementById("keyboard-input");
const backspace = document.querySelector(".keyboard__key-backspace");
const caps = document.querySelector(".keyboard__key-caps");
const enter = document.querySelector(".keyboard_key-enter");
const space = document.querySelector(".keyboard__key-space");
let isCapsLockPressed = false;

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("key-layout")) {
    pressKey(event.target.textContent);
  }
});

function pressKey(key) {
  const keyValue = isCapsLockPressed ? key.toUpperCase() : key.toLowerCase();
  placeholder.value += keyValue;
}

backspace.addEventListener("click", () => {
  placeholder.value = placeholder.value.substring(
    0,
    placeholder.value.length - 1
  );
});

enter.addEventListener("click", () => {
  placeholder.value += "\n";
});

space.addEventListener("click", () => {
  placeholder.value += " ";
});

caps.addEventListener("click", () => {
  updateCaps();
});

function updateCaps() {
  caps.classList.toggle("keyboard__key-active");
  isCapsLockPressed = !isCapsLockPressed;
  keyboard.classList.toggle("keyboard_lowercase");
  keyboard.classList.toggle("keyboard_uppercase");
}
