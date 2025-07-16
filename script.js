// Mostrar elementos con animación cuando aparecen
const secciones = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

secciones.forEach(sec => observer.observe(sec));

// Botón scroll hacia arriba
const btnScroll = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});

btnScroll.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
