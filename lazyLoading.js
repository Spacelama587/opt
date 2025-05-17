document.addEventListener('DOMContentLoaded', function() {
  // Let the page render first
  setTimeout(function() {
    const heroArea = document.querySelector('.hero-area');
    
    // Load single optimized image after critical content is displayed
    heroArea.style.backgroundImage = 'url("./images/hero-bg.min.webp")';
  }, 200); // Small delay to prioritize core content rendering
});