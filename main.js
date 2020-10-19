const keys = document.querySelectorAll(".key");

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.code}"]`),
    audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;
  playAudioAddClass(audio, key);
}
window.addEventListener("keydown", playSound);

function playAudioAddClass(audio, key) {
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function clickMouse(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.currentTarget.dataset.key}"]`
  );
  playAudioAddClass(audio, this);
}
keys.forEach((key) => key.addEventListener("click", clickMouse));
