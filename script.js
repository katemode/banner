const movingElement = document.querySelector('.moving-element');
const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  
  movingElement.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});