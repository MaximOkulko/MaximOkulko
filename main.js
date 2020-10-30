const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const symbolPlay = "\u23F5";
const symbolPause = "\u23F8";

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? symbolPlay : symbolPause;
  toggle.textContent = icon;
}

function rewindVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
  video[this.name] = this.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function rewindClickVideo(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", rewindVideo));
ranges.forEach((range) => range.addEventListener("change", updateRange));
ranges.forEach((range) => range.addEventListener("mousemove", updateRange));
progress.addEventListener("click", rewindClickVideo);
