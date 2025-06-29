// ✅ Tab navigation: smooth scrolling + active class toggle
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ✅ Background video: unmute and play on click
document.addEventListener('click', () => {
  const video = document.getElementById('bgVideo');
  if (video) {
    video.muted = false;
    video.play().catch(err => console.log('Playback error:', err));
  }
});

// ✅ Load particles.js if available
window.onload = function () {
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60 },
        color: { value: '#00e6d0' },
        shape: { type: 'circle' },
        opacity: { value: 0.3 },
        size: { value: 4 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00e6d0',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
};

// ✅ Dummy contact form handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo form)');
    contactForm.reset();
  });
}

// ✅ Mobile navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinksList = document.getElementById('nav-links');
if (menuToggle && navLinksList) {
  menuToggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });
}
