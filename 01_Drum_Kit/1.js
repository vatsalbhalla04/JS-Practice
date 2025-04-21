function removeTransition(e){
    if(e.propertyName !== 'transform') return // skip it if it's not a transform
    this.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  
  audio.currentTime = 0; // this will rewind the audio to start again which was not the feature eariler.
  audio.play();

  key.classList.add('playing');// This line adds a CSS class named "playing" to the HTML element stored in the variable key.

//.classList → This is a built-in JavaScript property that lets you access and modify the classes of an HTML element.

//classList is specifically for managing CSS classes on HTML elements in JavaScript, having built -in features like add, remove, toggle, contains. 

//.add('playing') → Adds the class "playing" to the element’s class attribute.

}

// Event-Listeners: 
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

// transitionend is needed to ensure that the follow-up action (like removing the `.playing` class) occurs "only after" the CSS transition (e.g., `transform`) finishes. Calling `removeTransition()` immediately would interrupt the animation**, causing the effect to reset instantly. Using `transitionend` allows the animation to complete smoothly before cleaning up.

window.addEventListener("keydown", playSound);
