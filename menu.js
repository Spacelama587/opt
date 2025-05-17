const hamburger = document.querySelector(".hamburger"),
  navbar = document.querySelector(".navbar"),
  body = document.body,
  menuToggles = document.querySelectorAll(".menu-toggle"),
  menuBg = document.querySelector(".menu-background"),
  navbarItems = document.querySelectorAll(".navbar-item");
hamburger.addEventListener("click", () => {
  let e = hamburger.classList.toggle("open");
  navbar.classList.toggle("mobile-open", e),
    body.classList.toggle("navopen", e);
}),
  menuToggles.forEach((e) => {
    e.addEventListener("click", () => {
      let t = e.closest(".navbar-item"),
        a = "true" === t.getAttribute("data-menu-open");
      navbarItems.forEach((e) => e.setAttribute("data-menu-open", !1)),
        t.setAttribute("data-menu-open", !a),
        menuBg.classList.toggle("show", !a),
        navbar.classList.toggle("open", !a);
    });
  }),
  menuBg.addEventListener("click", () => {
    navbarItems.forEach((e) => e.setAttribute("data-menu-open", !1)),
      menuBg.classList.remove("show"),
      navbar.classList.remove("open");
  });
