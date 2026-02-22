// ====== TYPED ======
new Typed("#typed", {
  strings: [
    "Android Developer"," Java","Room","Firebase Enthusiast"," REST API Integrator"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// ====== PARTICLES ======
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

// ====== REVEAL ======
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ====== FLIP LOGIC ======
function flipCard(btn) {
  btn.closest(".flip-card").classList.toggle("flipped");
}

// ====== NAVBAR ACTIVE LINK ======
const sections = document.querySelectorAll("section");
const navLinksA = document.querySelectorAll("nav ul li a"); // renamed variable

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksA.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
});

// Close menu when link clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
  });
});

// Reusable close function for the mobile burger menu
function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Close on resize (useful when switching between mobile/desktop)
window.addEventListener("resize", () => {
  if (navLinks.classList.contains("show")) closeMenu();
});

// Close on scroll (only when menu is open)
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("show")) closeMenu();
}, { passive: true });
