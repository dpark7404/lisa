const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// Calculate days since April 20, 2024
const startDate = new Date("2025-04-20");
const today = new Date();
const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Set the days in HTML
document.getElementById("days-count").textContent = daysDiff;
