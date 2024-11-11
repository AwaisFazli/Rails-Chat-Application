console.log("Hello, Rails 7 with JavaScript!");

const toggle = document.getElementById("language-dropdown-toggle");
const dropdown = document.getElementById("language-dropdown");

toggle.addEventListener("click", function (event) {
  event.preventDefault();
  dropdown.classList.toggle("hidden");
});

// Close the dropdown if clicked outside of it
document.addEventListener("click", function (event) {
  if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});
