const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", clickMouse));

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  playAudioAddClass(audio, key);
}

function playAudioAddClass(audio, key) {
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

function clickMouse(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.currentTarget.dataset.key}"]`
  );
  playAudioAddClass(audio, this);
}
