import Rails from '@rails/ujs';
Rails.start();

console.log("Hello, Rails 7 with JavaScript!");


  const toggle = document.getElementById("language-dropdown-toggle");
  const dropdown = document.getElementById("language-dropdown");

  // Only add event listeners if the elements exist
  if (toggle && dropdown) {
    // Toggle the dropdown visibility on click
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
  }
