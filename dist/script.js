document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', function () {
    playSound(this.getAttribute('data-key'));
  });
});

document.addEventListener('keydown', function (e) {
  playSound(e.key.toUpperCase());
});

function playSound(key) {
  const audio = document.getElementById(key);
  const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);

  if (!audio) return; // Stop if no associated audio

  audio.currentTime = 0; // Rewind to start
  audio.play();

  const display = document.getElementById('display');
  display.textContent = pad.id; // Display the sound name
}