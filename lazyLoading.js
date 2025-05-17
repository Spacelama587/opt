window.addEventListener("DOMContentLoaded", e => {
  // Preload the hero image specifically for better LCP
  const heroArea = document.querySelector(".hero-area");
  if (heroArea && heroArea.dataset.bg) {
    const img = new Image();
    img.src = heroArea.dataset.bg;
    img.onload = () => {
      heroArea.style.backgroundImage = `url(${heroArea.dataset.bg})`;
      heroArea.classList.remove("lazybg");
    };
  }
  
  // Handle all other lazy backgrounds
  let lazyBgs = document.querySelectorAll(".lazybg:not(.hero-area)");
  let options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
  };
  
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadBg(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  function loadBg(element) {
    if (element.dataset.bg) {
      element.style.backgroundImage = `url(${element.dataset.bg})`;
    }
    element.classList.remove("lazybg");
  }
  
  lazyBgs.forEach(bg => {
    observer.observe(bg);
  });
});