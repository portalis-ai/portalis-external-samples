/**
 * ===================================================
 * PORTALIS AI AVATAR WIDGET SCRIPT
 * ===================================================
 * This script handles the behavior and interactions
 * for the slide-in assistant avatar widget.
 */

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
    setAvatarPreview();
    setupEventListeners();
    if (!isMobile) {
      setupTooltip();
    }
  }

  function setupEventListeners() {
    window.addEventListener("resize", updateLayout);
    floatingButton.addEventListener("click", toggleModal);
    floatingButton.addEventListener("click", toggleActiveCallOverlay);
    closeButton.addEventListener("click", closeModal);
    document.addEventListener("keydown", handleKeyPress);
  }

  // ==================== Core Functions ====================
  function updateLayout() {
    isMobile = window.innerWidth < 768;
    // Only affect body overflow when modal is active
    if (modalOverlay.classList.contains("active")) {
      document.body.style.overflow = isMobile ? "hidden" : "";
    } else {
      document.body.style.overflow = "";
    }
  }

  function setAvatarPreview() {
    floatingButton.innerHTML = `
      <video class="video-preview" autoplay loop muted playsinline>
        <source src="${avatarPreviewURL}" type="video/mp4">
      </video>
      <div class="floating-button-overlay"></div>`;
  }

  function toggleActiveCallOverlay() {
    const overlay = floatingButton.querySelector(".floating-button-overlay");
    if (!overlay) return;

    overlay.innerHTML = activeCallIcon;
    overlay.classList.toggle("active");
  }

  function hideTooltip() {
    tooltip.style.opacity = "0";
  }

  function toggleModal() {
    modalOverlay.classList.contains("active") ? closeModal() : openModal();
  }

  function openModal() {
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = "0";

    // Force browser reflow to ensure the transition works
    void modalOverlay.offsetWidth;

    modalOverlay.style.opacity = "1";
    modalOverlay.classList.add("active");

    hideTooltip();
    updateLayout();

    // Ensure we're not preventing interaction with the code iframe
    // when overlay is active but not full screen (desktop mode)
    if (!isMobile) {
      modalOverlay.style.pointerEvents = "auto";
    }
  }

  function closeModal(e) {
    if (e) e.stopPropagation();

    modalContent.style.opacity = "0";
    modalOverlay.style.opacity = "0";

    setTimeout(() => {
      modalOverlay.classList.remove("active");
      modalOverlay.style.visibility = "hidden";
      modalContent.style.opacity = "1";
      document.body.style.overflow = "";
    }, 200);
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

/**
 * ===================================================
 * END OF PORTALIS AI AVATAR WIDGET SCRIPT
 * ===================================================
 */
