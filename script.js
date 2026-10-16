function generateStars(numberOfStars) {
  const starfield = document.getElementById('starfield');
  let boxShadowString = '';
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.floor(Math.random() * 10000);
    const y = Math.floor(Math.random() * 10000);
    const size = (Math.random() * 0.25 + 0.2).toFixed(5); 
    const opacity = (Math.random() * 0.8 + 0.2).toFixed(5); 

    boxShadowString += `${x/100}vw ${y/100}vh 0px ${size}px rgba(var(--star-rgb), ${opacity})`;
    
    if (i < numberOfStars - 1) {
      boxShadowString += ', ';
    }
  }
  starfield.style.boxShadow = boxShadowString;
}
window.addEventListener('DOMContentLoaded', () => {
  generateStars(250);
  });
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    themeToggle.textContent = isLightMode ? 'Dark mode' : 'Light mode';
    themeToggle.setAttribute('aria-pressed', String(isLightMode));
    themeToggle.addEventListener('keydown', (event) => {
    if (event.repeat) {
      event.preventDefault();
    }
  });
});
