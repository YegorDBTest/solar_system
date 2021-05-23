/** Set svg container dimensions. */
function setDimensions() {
  let svg = document.getElementById('main');
  let width = parseInt(window.innerWidth * 0.9);
  let height = parseInt(window.innerHeight * 0.9);
  svg.setAttribute('width', `${width}px`);
  svg.setAttribute('height', `${height}px`);
}


document.addEventListener('DOMContentLoaded', (e) => {
  setDimensions();

  window.addEventListener('resize', (e) => {
    setDimensions();
  });
});
