function playSound(e){
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return; //stop function from running
  audio.currentTime = 0; //rewind audio to start to allow multiple hits in succession
  audio.play();
  key.classList.add('playing');
}

function removeTransistion(e){
  if(e.propertyName !== 'transform') return; //ignore if transistion end is not transform transition
  // console.log(e.propertyName);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransistion));
window.addEventListener('keydown', playSound);
