// YEAR
document.getElementById("year").innerText = new Date().getFullYear();

// TYPING
new Typed("#typed", {
  strings: [
    "Android Developer"," Java Expert","Room Expert","Firebase Enthusiast"," REST API Integrator"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// PARTICLES (HERO ONLY)
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#1e90ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#1e90ff",
      opacity: 0.4
    },
    move: { speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
 //FLIP LOGIC
function flipCard(btn) {
  btn.closest(".flip-card").classList.toggle("flipped");
}

// Navbar active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
