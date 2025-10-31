const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const year = document.getElementById("year");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

window.addEventListener("load", () => {
  const nombre = document.getElementById("nombre");
  nombre.style.position = "relative";
  nombre.style.top = "auto";
  nombre.style.left = "auto";
  nombre.style.transform = "none";
  nombre.style.zIndex = "3";
  nombre.style.color = "#f0f0f0";
});

year.textContent = new Date().getFullYear();
