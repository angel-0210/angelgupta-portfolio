// ====== THEME STORAGE & PERSISTENCE ======
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

// Check saved setting
const currentTheme = localStorage.getItem("portfolio-theme") || "dark";
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.className = "fa-solid fa-moon";
} else {
  themeIcon.className = "fa-solid fa-sun";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

// ====== MOBILE NAVIGATION HAMBURGER DRAWER ======
const hamburgerMenuBtn = document.getElementById("hamburgerMenuBtn");
const mobileNavTray = document.getElementById("mobileNavTray");

hamburgerMenuBtn.addEventListener("click", () => {
  mobileNavTray.classList.toggle("active");
  const isActive = mobileNavTray.classList.contains("active");
  hamburgerMenuBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
});

// Close mobile tray when clicking navigation link items
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileNavTray.classList.remove("active");
    hamburgerMenuBtn.setAttribute("aria-expanded", "false");
  });
});

// Close mobile tray if clicking outside of it
document.addEventListener("click", (e) => {
  if (!mobileNavTray.contains(e.target) && !hamburgerMenuBtn.contains(e.target)) {
    mobileNavTray.classList.remove("active");
    hamburgerMenuBtn.setAttribute("aria-expanded", "false");
  }
});

// Escape key to close tray
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileNavTray.classList.remove("active");
    hamburgerMenuBtn.setAttribute("aria-expanded", "false");
  }
});

// ====== CONTACT FORM VALIDATION & TRANSMISSION SUBMISSION ======
const contactForm = document.getElementById("portfolioContactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("formName");
    const emailInput = document.getElementById("formEmail");
    const messageInput = document.getElementById("formMessage");
    const submitBtn = contactForm.querySelector("button[type='submit']");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic client validation
    if (!name || !email || !message) {
      formFeedback.style.display = "block";
      formFeedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please fill in all fields.`;
      formFeedback.style.color = "var(--system-red)";
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formFeedback.style.display = "block";
      formFeedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email address.`;
      formFeedback.style.color = "var(--system-red)";
      return;
    }

    // Set Loading State & Prevent Duplicate submissions
    submitBtn.disabled = true;
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...`;
    formFeedback.style.display = "none";

    // Formspree action endpoint (using a placeholder endpoint or a standard submission)
    // Users can easily change the endpoint URL or Formspree ID.
    const formspreeEndpoint = "https://formspree.io/f/maqddyvo";

    fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then(response => {
      if (response.ok) {
        formFeedback.style.display = "block";
        formFeedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Message transmitted successfully! Thank you, ${name}.`;
        formFeedback.style.color = "var(--android-green)";
        contactForm.reset();
      } else {
        throw new Error("Form transmission failed");
      }
    })
    .catch(error => {
      formFeedback.style.display = "block";
      formFeedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Transmission failed. Please try again later or email directly.`;
      formFeedback.style.color = "var(--system-red)";
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
      
      // Auto-clear message notification after 7 seconds
      setTimeout(() => {
        formFeedback.style.display = "none";
      }, 7000);
    });
  });
}

// ====== DOCK HEADER CTA ON SCROLL ======
const navContactCta = document.getElementById("navContactCta");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navContactCta.style.display = "inline-flex";
  } else {
    navContactCta.style.display = "none";
  }
});
