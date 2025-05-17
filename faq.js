document.querySelectorAll(".faq-accordion-item").forEach((e) => {
  let c = e.querySelector(".faq-accordion-header"),
    r = e.querySelector(".faq-accordion-content"),
    a = e.querySelector(".faq-accordion-trigger");
  c.addEventListener("click", () => {
    let e = r.style.maxHeight;
    document
      .querySelectorAll(".faq-accordion-header")
      .forEach((e) => e.classList.remove("active")),
      document
        .querySelectorAll(".faq-accordion-content")
        .forEach((e) => (e.style.maxHeight = null)),
      document
        .querySelectorAll(".faq-accordion-trigger")
        .forEach((e) => e.classList.remove("active")),
      e ||
        (c.classList.add("active"),
        (r.style.maxHeight = r.scrollHeight + "px"),
        a.classList.add("active"));
  });
});
