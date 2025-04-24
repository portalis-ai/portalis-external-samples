(function () {
  // ==================== Configuration ====================
  const avatarPreviewURL =
    "https://www.dropbox.com/scl/fi/7z3y6fxma23uoifzy13ak/Jess-Preview.mp4?rlkey=0h20xim0qaifrqlirpx1kwxcy&st=yci8yvda&raw=1";
  const activeCallIcon = `<i class="bi bi-x" id="activeCallIcon"></i>`;

  // ==================== DOM Elements ====================
  const widget = document.getElementById("portalis-widget");
  const floatingButton = widget.querySelector(".floating-button");
  const modalOverlay = widget.querySelector(".modal-overlay");
  const closeButton = widget.querySelector(".close-button");
  const tooltip = widget.querySelector(".tooltip");
  const modalContent = modalOverlay.querySelector(".modal-content");

  // ==================== State ====================
  let isMobile = window.innerWidth < 768;

  // ==================== Initialization ====================
  function init() {
    // Set initial avatar preview
    setAvatarPreview();

    // Set up event listeners
    window.addEventListener("resize", updateLayout);
    floatingButton.addEventListener("click", toggleModal);
    floatingButton.addEventListener("click", toggleActiveCallOverlay);
    closeButton.addEventListener("click", closeModal);
    document.addEventListener("keydown", handleKeyPress);

    // Setup tooltip behavior for non-mobile
    if (!isMobile) {
      setupTooltip();
    }
  }

  // ==================== Core Functions ====================

  function updateLayout() {
    isMobile = window.innerWidth < 768;
    if (isMobile && modalOverlay.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function setAvatarPreview() {
    floatingButton.innerHTML = `
      <video class="video-preview" autoplay loop muted playsinline>
        <source src="${avatarPreviewURL}" type="video/mp4">
      </video>`;
  }

  function toggleActiveCallOverlay() {
    // Check if overlay exists, create it if not
    let overlay = floatingButton.querySelector(".floating-button-overlay");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "floating-button-overlay";
      floatingButton.appendChild(overlay);
    }

    overlay.innerHTML = activeCallIcon;

    // Toggle the "active" class
    if (overlay.classList.contains("active")) {
      overlay.classList.remove("active"); // Hide the overlay
    } else {
      overlay.classList.add("active"); // Show the overlay
    }
  }

  function hideTooltip() {
    tooltip.style.opacity = "0";
  }

  function toggleModal() {
    const isActive = modalOverlay.classList.contains("active");

    if (!isActive) {
      openModal();
    } else {
      closeModal();
    }
  }

  function openModal() {
    // Make the overlay visible but with opacity 0
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = "0";

    // Force browser reflow to ensure the transition works
    void modalOverlay.offsetWidth;

    // Set opacity to 1 to trigger the fade-in transition
    modalOverlay.style.opacity = "1";
    modalOverlay.classList.add("active");

    // Hide tooltip and update other elements
    hideTooltip();
    updateLayout();
    document.body.style.overflow = "hidden";
  }

  function closeModal(e) {
    if (e) e.stopPropagation();

    // Start the fade-out transition
    modalContent.style.opacity = "0";
    modalOverlay.style.opacity = "0";

    setTimeout(() => {
      // After the transition completes, hide the overlay completely
      modalOverlay.classList.remove("active");
      modalOverlay.style.visibility = "hidden";

      // Reset content opacity for next open
      modalContent.style.opacity = "1";

      //setAvatarPreview();
      document.body.style.overflow = "";
    }, 200); // Match transition duration in CSS
  }

  // ==================== Event Handlers ====================

  function handleKeyPress(e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  }

  function setupTooltip() {
    function positionTooltip() {
      const rect = floatingButton.getBoundingClientRect();
      tooltip.style.left = rect.left - tooltip.offsetWidth + 100 + "px";
      tooltip.style.top =
        rect.top + rect.height / 2 - tooltip.offsetHeight / 2 + "px";
    }

    floatingButton.addEventListener("mouseover", () => {
      // Only show tooltip if modal is not active
      if (!modalOverlay.classList.contains("active")) {
        positionTooltip();
        tooltip.style.opacity = "1";
      }
    });

    floatingButton.addEventListener("mouseout", () => {
      tooltip.style.opacity = "0";
    });
  }

  // ==================== Initialize ====================
  init();
})();
