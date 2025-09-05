const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messInput = document.getElementById("mess");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

//add trim() so that input fields do not trigger errorMessages
form.addEventListener("submit", function (e) {
  if (!nameInput.value.trim() || 
      !emailInput.value.trim() || 
      !messInput.value.trim() || 
      !phoneInput.value.trim()
) {
    e.preventDefault();
    errorMessage.textContent = "All fields are required!";
    errorMessage.style.borderWidth = "1em red"
  } else {
    e.preventDefault();
    errorMessage.textContent = "";
    alert("✅ Message saved!");
  }
});


const inputs = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("phone"),
  document.getElementById("mess")

];

inputs.forEach(input => {
  input.addEventListener("mouseover", () => {
    input.style.borderColor = "blue";
    input.style.borderWidth = "0.2rem";
  });

  input.addEventListener("mouseout", () => {
    input.style.border = ""; // reset
  });
});

const questions=document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
// Hide all answers first
    document.querySelectorAll(".answer").forEach((a) => {
      a.style.display = "none";
    });

    // Show the one that belongs to the clicked question
    const answer = q.nextElementSibling;
    answer.style.display = "block";
  });
});


// making the FAQ section to show answers one by one when clicked
const button = document.querySelector(".backbut");
button.addEventListener("click", () => {
  // toggle body theme
  document.body.classList.toggle("body-dark");

  //toggle for other elements

  document.querySelectorAll(".head").forEach(el => el.classList.toggle("head-dark"));
  document.querySelectorAll(".message").forEach(el => el.classList.toggle("message-dark"));
  document.querySelectorAll(".socials").forEach(el => el.classList.toggle("socials-dark"));
  document.querySelectorAll(".accordion").forEach(el => el.classList.toggle("accordion-dark"));
  
});

//coding the "back to top" button to take the user back to the top
const scrollup = document.getElementById("scroll-up");

// Show button when scrolling down
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    scrollup.style.display = "block";
  } else {
    scrollup.style.display = "none";
  }
};

// Scroll back to top on click
scrollup.onclick = function() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, etc.
  document.body.scrollTop = 0;            // For Safari
};
