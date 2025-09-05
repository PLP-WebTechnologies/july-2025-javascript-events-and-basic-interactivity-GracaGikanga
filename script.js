// Grab references to form input fields and elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messInput = document.getElementById("mess");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

// Handle form submission
form.addEventListener("submit", function (e) {
  // Check if any input field is empty (after trimming whitespace)
  if (!nameInput.value.trim() || 
      !emailInput.value.trim() || 
      !messInput.value.trim() || 
      !phoneInput.value.trim()
  ) {
    e.preventDefault(); // Prevent form submission
    errorMessage.textContent = "All fields are required!"; // Show error
    errorMessage.style.borderWidth = "1em red"; // Style error (⚠️ should be corrected to border = "1em solid red")
  } else {
    e.preventDefault(); // Stop form for demo (remove this to allow actual submission)
    errorMessage.textContent = ""; // Clear error
    alert("✅ Message saved!"); // Success feedback
  }
});

// Store all inputs in an array for styling interactions
const inputs = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("phone"),
  document.getElementById("mess")
];

// Add hover effects for input fields
inputs.forEach(input => {
  // On hover: highlight border
  input.addEventListener("mouseover", () => {
    input.style.borderColor = "blue";
    input.style.borderWidth = "0.2rem";
  });

  // On mouse out: reset border style
  input.addEventListener("mouseout", () => {
    input.style.border = ""; // reset to default
  });
});

// FAQ section toggle: grab all questions
const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    // Hide all answers first
    document.querySelectorAll(".answer").forEach((a) => {
      a.style.display = "none";
    });

    // Show only the answer next to the clicked question
    const answer = q.nextElementSibling;
    answer.style.display = "block";
  });
});

// Theme toggle: button for switching to dark mode
const button = document.querySelector(".backbut");
button.addEventListener("click", () => {
  // Toggle dark mode on the body
  document.body.classList.toggle("body-dark");

  // Apply dark mode to other sections
  document.querySelectorAll(".head").forEach(el => el.classList.toggle("head-dark"));
  document.querySelectorAll(".message").forEach(el => el.classList.toggle("message-dark"));
  document.querySelectorAll(".socials").forEach(el => el.classList.toggle("socials-dark"));
  document.querySelectorAll(".accordion").forEach(el => el.classList.toggle("accordion-dark"));
});

// Back-to-top button functionality
const scrollup = document.getElementById("scroll-up");

// Show button only when scrolling down past 100px
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    scrollup.style.display = "block";
  } else {
    scrollup.style.display = "none";
  }
};

// Scroll smoothly back to the top when button is clicked
scrollup.onclick = function() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, etc.
  document.body.scrollTop = 0;            // For Safari
};
