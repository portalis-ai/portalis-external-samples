// Function to exit fullscreen mode
function exitIframe() {
  console.log("Exiting iframe..."); // Debug log

  const iframe = document.getElementById("avatar-iframe");
  const exitBtn = document.getElementById("exit-btn");

  // Hide the iframe and exit button
  if (iframe) {
    iframe.style.display = "none";
  }
  if (exitBtn) {
    exitBtn.style.display = "none";
  }

  // Restore body scroll
  document.body.style.overflow = "auto";

  console.log("Iframe exited"); // Debug log
}

// Listen for ESC key to exit fullscreen
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    console.log("ESC key pressed"); // Debug log
    exitIframe();
  }
});

// Function to enter fullscreen
function enterIframe() {
  console.log("Entering iframe..."); // Debug log

  const iframe = document.getElementById("avatar-iframe");
  const exitBtn = document.getElementById("exit-btn");

  // Show iframe and exit button
  if (iframe) {
    iframe.style.display = "block";
  }
  if (exitBtn) {
    exitBtn.style.display = "flex";
  }

  // Hide body scroll
  document.body.style.overflow = "hidden";

  console.log("Iframe entered"); // Debug log
}

// Add click event listener as backup
document.addEventListener("DOMContentLoaded", function () {
  const exitBtn = document.getElementById("exit-btn");
  if (exitBtn) {
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Exit button clicked"); // Debug log
      exitIframe();
    });
  }
});
