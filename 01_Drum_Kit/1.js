function removeTransition(e){
    if(e.propertyName !== 'transform') return // skip it if it's not a transform
    this.classList.remove('playing')
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // this will rewind the audio to start again which was not the feature eariler.
  audio.play();

  key.classList.add('playing');
}

// Event-Listeners: 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);
