document.addEventListener('DOMContentLoaded', function() {
  // Let the page render first
  setTimeout(function() {
    const heroArea = document.querySelector('.hero-area');
    
    // Load the image with the exact same path as original
    heroArea.style.backgroundImage = 'url("./images/hero-bg.min.webp")';
  }, 200);
});