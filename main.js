const holes = document.querySelectorAll(".hole");
const kenny = document.querySelectorAll(".kenny");
const scoreBoard = document.getElementById("score");
const audio = document.getElementById("audio");
const buttonStart = document.getElementById("buttonStart");
let lastHole;
let timeUp = false;
let score = 0;

function changeTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function changeHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  //The function uses the lastHole variable to ensure that the same hole is not selected twice in a row.
  // If lastHole is equal to the current hole, call changeHole again.
  if (hole === lastHole) {
    return changeHole(holes);
  }
  lastHole = hole;
  return hole;
}

function jumpKenny() {
  const time = changeTime(500, 1500);
  const hole = changeHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      jumpKenny();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  jumpKenny();
  setTimeout(() => (timeUp = true), 15000);
}

function makeShot(e) {
  audio.currentTime = 0;
  audio.play();
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

buttonStart.addEventListener("click", startGame);
kenny.forEach((kenny) => kenny.addEventListener("click", makeShot));