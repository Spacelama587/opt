document.addEventListener('DOMContentLoaded', function() {
  // Set a short timeout to prioritize initial rendering
  setTimeout(function() {
    // Load hero background image
    const heroArea = document.querySelector('.hero-area');
    if (heroArea) {
      heroArea.style.backgroundImage = 'url("./images/hero-bg.min.webp")';
    }
    
    // Load contact section background image
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.style.backgroundImage = 'url("./images/contact-section-bg.min.webp")';
    }
  }, 200);
});