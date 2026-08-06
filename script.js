// Chat icon dropdown toggle
const chatBtn = document.getElementById("chat-btn");
const chatDropdown = document.getElementById("chat-dropdown");

chatBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  chatDropdown.classList.toggle("open");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!chatDropdown.contains(event.target) && !chatBtn.contains(event.target)) {
    chatDropdown.classList.remove("open");
  }
});

// Theme toggle (light <-> dark)
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
});

const slidesContainer = document.getElementById("carousel-slides");
const dots = document.querySelectorAll("#carousel-dots .dot");
const totalSlides = dots.length;
let currentSlide = 0;
let autoAdvance;

function goToSlide(index) {
  currentSlide = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const next = (currentSlide + 1) % totalSlides;
  goToSlide(next);
}

function startAutoAdvance() {
  autoAdvance = setInterval(nextSlide, 5000);
}

function stopAutoAdvance() {
  clearInterval(autoAdvance);
}

// Click a dot to jump to that slide
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index, 10);
    goToSlide(index);
    stopAutoAdvance();
    startAutoAdvance(); // restart timer after manual click
  });
});

startAutoAdvance();

// Accordion toggle
const accordionRows = document.querySelectorAll(".accordion-row");
const accordionItems = document.querySelectorAll(".accordion-item");

accordionRows.forEach((row) => {
  row.addEventListener("click", () => {
    const item = row.parentElement;
    item.classList.toggle("open");
  });
});
