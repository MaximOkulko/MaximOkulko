const inputs = document.querySelectorAll("input");

inputs.forEach((input) => input.addEventListener("change", updateInput));
inputs.forEach((input) => input.addEventListener("mousemove", updateInput));

function updateInput() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
