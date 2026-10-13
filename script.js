function generateStars(numberOfStars) {
  const starfield = document.getElementById('starfield');
  let boxShadowString = '';
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.floor(Math.random() * 10000);
    const y = Math.floor(Math.random() * 10000);
    const size = (Math.random() * 0.25 + 0.2).toFixed(5); 
    const opacity = (Math.random() * 0.8 + 0.2).toFixed(5); 

    boxShadowString += `${x/100}vw ${y/100}vh 0px ${size}px rgba(255, 255, 255, ${opacity})`;
    
    if (i < numberOfStars - 1) {
      boxShadowString += ', ';
    }
  }
  starfield.style.boxShadow = boxShadowString;
}
window.addEventListener('DOMContentLoaded', () => {
  generateStars(250); 
});
