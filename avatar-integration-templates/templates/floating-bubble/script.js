// Get DOM elements
const floatingButton = document.querySelector(".floating-button");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");
const videoPreview = document.querySelector(".video-preview");
const chatIframe = document.querySelector("#chat-iframe");

const avatarPreviewURL =
  "https://www.dropbox.com/scl/fi/7z3y6fxma23uoifzy13ak/Jess-Preview.mp4?rlkey=0h20xim0qaifrqlirpx1kwxcy&st=yci8yvda&raw=1";

const activeCallURL =
  "https://www.dropbox.com/scl/fi/0kxx4enwsv0hnu0omp2ry/x_image.png?rlkey=77mn0c4bi0ne8hy2le2z5wvfe&st=lvv9mvx7&raw=1";

const avatarPreviewHTML = `
      <video class="video-preview" autoplay loop muted playsinline>
        <source
          src="${avatarPreviewURL}"
          type="video/mp4"
        />
      </video>`;

const activeCallHTML = `
      <img class="video-preview" src="${activeCallURL}"/>
      `;

let isAvatarPreview = true; // Flag to track the current state

// Open modal when clicking the floating button
floatingButton.addEventListener("click", () => {
  if (isAvatarPreview) {
    modalOverlay.classList.add("active");
    floatingButton.innerHTML = activeCallHTML;
  } else {
    modalOverlay.querySelector(".modal-content").style.animation =
      "slideOutToSide 0.5s ease-out";
    setTimeout(() => {
      modalOverlay.classList.remove("active");
      floatingButton.innerHTML = avatarPreviewHTML;
      modalOverlay.querySelector(".modal-content").style.animation = ""; // Reset animation
    }, 500); // Match the duration of the slideOutToSide animation
  }
  isAvatarPreview = !isAvatarPreview; // Toggle the state
});

// Close modal when clicking close button or outside modal
closeButton.addEventListener("click", () => {
  modalOverlay.querySelector(".modal-content").style.animation =
    "slideOutToSide 0.5s ease-out";
  setTimeout(() => {
    modalOverlay.classList.remove("active");
    floatingButton.innerHTML = avatarPreviewHTML;
    modalOverlay.querySelector(".modal-content").style.animation = ""; // Reset animation
    isAvatarPreview = true; // Reset to avatar preview state
  }, 500); // Match the duration of the slideOutToSide animation
});

// Close modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.querySelector(".modal-content").style.animation =
      "slideOutToSide 0.5s ease-out";
    setTimeout(() => {
      modalOverlay.classList.remove("active");
      floatingButton.innerHTML = avatarPreviewHTML;
      modalOverlay.querySelector(".modal-content").style.animation = ""; // Reset animation
      isAvatarPreview = true; // Reset to avatar preview state
    }, 500); // Match the duration of the slideOutToSide animation
  }
});

const toolTip = document.createElement("div");
toolTip.textContent = "Chat with our amazing AI assistant!";

document.body.appendChild(toolTip);

floatingButton.onmouseover = (e) => {
  toolTip.style.display = "block";
  toolTip.style.left = e.pageX + 30 + "px";
  toolTip.style.top = e.pageY + 30 + "px";
};

// Better approach - catches all logs immediately
const originalConsoleLog = console.log;
console.log = function (...args) {
  console.log("nah");
  if (args[0] === "your specific string") {
    // Runs for every matching log, no matter how fast they come
  }
  originalConsoleLog.apply(console, args);
};

floatingButton.innerHTML = avatarPreviewHTML;
