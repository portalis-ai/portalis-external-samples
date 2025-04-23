(function () {
  // Get DOM elements
  const widget = document.getElementById("portalis-widget");
  const floatingButton = widget.querySelector(".floating-button");
  const modalOverlay = widget.querySelector(".modal-overlay");
  const closeButton = widget.querySelector(".close-button");
  const tooltip = widget.querySelector(".tooltip");

  // Avatar preview video URL - replace with actual URL
  const avatarPreviewURL =
    "https://www.dropbox.com/scl/fi/7z3y6fxma23uoifzy13ak/Jess-Preview.mp4?rlkey=0h20xim0qaifrqlirpx1kwxcy&st=yci8yvda&raw=1";
  const activeCallURL =
    "https://www.dropbox.com/scl/fi/0kxx4enwsv0hnu0omp2ry/x_image.png?rlkey=77mn0c4bi0ne8hy2le2z5wvfe&st=lvv9mvx7&raw=1";

  let isMobile = window.innerWidth < 768;

  // Handle responsive layout
  function updateLayout() {
    isMobile = window.innerWidth < 768;
    if (isMobile && modalOverlay.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  // Initialize with avatar preview
  floatingButton.innerHTML = `
      <video class="video-preview" autoplay loop muted playsinline>
          <source src="${avatarPreviewURL}" type="video/mp4">
      </video>`;

  window.addEventListener("resize", updateLayout);

  // Handle button click
  floatingButton.addEventListener("click", () => {
    const isActive = modalOverlay.classList.contains("active");

    if (!isActive) {
      // Opening the modal
      modalOverlay.classList.add("active");
      floatingButton.innerHTML = `<img class="video-preview" src="${activeCallURL}"/>`;
      updateLayout();
    } else {
      // Closing the modal
      modalOverlay.querySelector(".modal-content").style.opacity = "0";
      setTimeout(() => {
        modalOverlay.classList.remove("active");
        modalOverlay.querySelector(".modal-content").style.opacity = "1";
        floatingButton.innerHTML = `
                  <video class="video-preview" autoplay loop muted playsinline>
                      <source src="${avatarPreviewURL}" type="video/mp4">
                  </video>`;
        document.body.style.overflow = "";
      }, 500);
    }
  });

  // Handle close button click
  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    modalOverlay.querySelector(".modal-content").style.opacity = "0";
    setTimeout(() => {
      modalOverlay.classList.remove("active");
      modalOverlay.querySelector(".modal-content").style.opacity = "1";
      floatingButton.innerHTML = `
              <video class="video-preview" autoplay loop muted playsinline>
                  <source src="${avatarPreviewURL}" type="video/mp4">
              </video>`;
      document.body.style.overflow = "";
    }, 500);
  });

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      modalOverlay.querySelector(".modal-content").style.opacity = "0";
      setTimeout(() => {
        modalOverlay.classList.remove("active");
        modalOverlay.querySelector(".modal-content").style.opacity = "1";
        floatingButton.innerHTML = `
                  <video class="video-preview" autoplay loop muted playsinline>
                      <source src="${avatarPreviewURL}" type="video/mp4">
                  </video>`;
        document.body.style.overflow = "";
      }, 500);
    }
  });

  // Tooltip handling only for non-mobile
  function positionTooltip(e) {
    const rect = floatingButton.getBoundingClientRect();
    tooltip.style.left = rect.left - tooltip.offsetWidth - 20 + "px";
    tooltip.style.top =
      rect.top + rect.height / 2 - tooltip.offsetHeight / 2 + "px";
  }

  if (!isMobile) {
    floatingButton.addEventListener("mouseover", () => {
      tooltip.style.display = "block";
      positionTooltip();
    });

    floatingButton.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });

    floatingButton.addEventListener("mousemove", positionTooltip);
  }
})();
