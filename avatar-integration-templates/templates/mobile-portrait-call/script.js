document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chatContainer");

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  function enforceMaxDimensions() {
    const currentWidth = chatContainer.offsetWidth;
    const currentHeight = chatContainer.offsetHeight;

    if (currentWidth > 587) {
      chatContainer.style.width = "587px";
    }

    if (currentHeight > 842) {
      chatContainer.style.height = "842px";
    }
  }

  function checkOrientation() {
    const overlay = document.getElementById("orientationOverlay");
    const isLandscape = window.innerWidth > window.innerHeight;

    if (isMobileDevice() && isLandscape) {
      overlay.style.display = "flex";
    } else {
      overlay.style.display = "none";
    }
  }

  // Run both functions on resize
  window.addEventListener("resize", function () {
    enforceMaxDimensions();
    checkOrientation();
  });

  window.addEventListener("orientationchange", checkOrientation);

  // Initial calls
  enforceMaxDimensions();
  checkOrientation();
});
