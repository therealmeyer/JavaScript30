
document.addEventListener("DOMContentLoaded", () => {


  window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    if (!audio) return; 
    audio.currentTime = 0;
    audio.play();
  });

  function removeTransitioned (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransitioned));
});
