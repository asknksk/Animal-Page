const imagesDiv = document.querySelector(".container");

function playSound(soundobj) {
  const thissound = document.querySelector(`.${soundobj}Sound`);

  thissound.play();
}

function stopSound(soundobj) {
  const thissound = document.querySelector(`.${soundobj}Sound`);
  thissound.pause();
  thissound.currentTime = 0;
}
imagesDiv.addEventListener("mouseover", (event) => {
  const sound = event.target.classList[0];
  playSound(sound);
});
imagesDiv.addEventListener("mouseout", (event) => {
  const sound = event.target.classList[0];
  stopSound(sound);
});
