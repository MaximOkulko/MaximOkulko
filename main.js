const books = document.querySelectorAll(".book");

books.forEach((book) => book.addEventListener("click", toggleOpen));
books.forEach((book) => book.addEventListener("transitionend", toggleActive));

function toggleOpen() {
  books.forEach((book) => book.classList.remove("open"));
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
