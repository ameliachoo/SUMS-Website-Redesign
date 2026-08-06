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

// Theme icon toggle (sun <-> moon)
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
});