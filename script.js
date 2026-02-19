// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact Form Handler (EmailJS)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formMsg = document.getElementById("formMsg");

  emailjs.send("service_w3l116h", "template_hv1sq7k", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })
    .then(() => {
      formMsg.textContent = "Thank you! Your message has been sent successfully.";
      formMsg.style.color = "#38bdf8";
      this.reset();
    }, (error) => {
      formMsg.textContent = "Failed to send message. Please try again later.";
      formMsg.style.color = "red";
      console.error("EmailJS Error:", error);
    });
});

// Active Section Highlight in Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
