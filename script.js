// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal on Scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(reveal => revealObserver.observe(reveal));

// Typewriter
const text = "Mock Tank Competition";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Mouse Parallax
document.querySelectorAll('.mouse-parallax').forEach(layer => {
  const speed = +layer.dataset.speed;
  document.addEventListener('mousemove', e => {
    const x = (window.innerWidth / 2 - e.pageX) / speed;
    const y = (window.innerHeight / 2 - e.pageY) / speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
