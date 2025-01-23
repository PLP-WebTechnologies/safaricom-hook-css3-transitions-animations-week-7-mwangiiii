// script.js

// Function with parameters and return values
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Example usage
  const area = calculateRectangleArea(5, 10);
  console.log(`Rectangle Area: ${area}`);
  
  // Function demonstrating scope
  function demonstrateScope() {
    let localVariable = "I am local";
    console.log(localVariable);
  
    if (true) {
      var globalVariable = "I am global due to var";
    }
  
    console.log(globalVariable); // Accessible due to "var"
  }
  
  // Call the function
  demonstrateScope();
  
  // Function to toggle a CSS class
  function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.toggle(className);
    }
  }
  
  // Part 3: Combining CSS Animations with JavaScript
  
  // Trigger spinner toggle
  document.getElementById("toggle-spinner").addEventListener("click", () => {
    toggleClass("spinner", "hidden");
  });
  
  // Trigger banner animation
  document.getElementById("trigger-banner").addEventListener("click", () => {
    const banner = document.querySelector(".animated-banner");
    banner.classList.remove("animated-banner"); // Reset animation
    void banner.offsetWidth; // Trigger reflow
    banner.classList.add("animated-banner"); // Restart animation
  });
  