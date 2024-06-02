// Made by Mattia Cacciatore S4850100 <cacciatore1995@hotmail.it> CS student at UniGe - Italy.
// Inspiration: Kevin Powell https://youtu.be/Z-3tPXf9a7M?si=zRV7p468wSbvko9v
const div = document.querySelector('div');
const img = document.getElementById('1');

img.addEventListener('mousemove', (e) => {
  rotateElement(e, div);
});

img.addEventListener('mouseout', (e) => {
  resetElement(e, div);
});

function rotateElement(event, element){
  // get mouse position
  const x = event.offsetX;
  const y = event.offsetY;
  // find the middle
  const centerX = img.offsetWidth / 2;
  const centerY = img.offsetHeight / 2;
  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = -((x - centerX) / centerX) * 20;
  const offsetY = ((y - centerY) / centerY * 20);
  // set rotation
  element.style.setProperty('--rotateX', offsetX + 'deg');
  element.style.setProperty('--rotateY', offsetY + 'deg');
}

function resetElement(event, element){
  element.style.setProperty('--rotateX', '0deg');
  element.style.setProperty('--rotateY', '0deg');
}
