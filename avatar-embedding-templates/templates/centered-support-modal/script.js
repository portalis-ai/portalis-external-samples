class SupportPanel {
  constructor(supportUrl = "about:blank") {
    this.supportUrl = supportUrl;
    this.isOpen = false;
    this.init();
  }

  init() {
    // Create button
    this.button = document.createElement("button");
    this.button.className = "support-button";
    this.button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>Support</span>
        `;

    // Create panel elements
    const panelHtml = `
            <div class="overlay" style="display: none;"></div>
            <div class="panel-container" style="display: none;">
                <div class="panel">
                    <div class="panel-header">
                        <h2 class="panel-title">Customer Support</h2>
                        <button class="close-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div class="iframe-container">
                        <iframe src="${this.supportUrl}" class="support-iframe" title="Customer Support Chat" frameborder="0" scrolling="auto" allowtransparency="true" allow="clipboard-read; clipboard-write; microphone"></iframe>
                    </div>
                </div>
            </div>
        `;

    // Create container and add elements
    this.container = document.createElement("div");
    this.container.style.pointerEvents = "none"; // Prevent container from capturing clicks
    this.container.innerHTML = panelHtml;

    // Add elements to document
    document.body.appendChild(this.button);
    document.body.appendChild(this.container);

    // Get references to elements
    this.overlay = this.container.querySelector(".overlay");
    this.panelContainer = this.container.querySelector(".panel-container");
    this.panel = this.container.querySelector(".panel");
    this.closeButton = this.container.querySelector(".close-button");

    // Enable pointer events only for interactive elements
    this.overlay.style.pointerEvents = "auto";
    this.panel.style.pointerEvents = "auto";
    this.button.style.pointerEvents = "auto";

    // Add event listeners
    this.button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle(true);
    });

    this.closeButton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle(false);
    });

    this.overlay.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle(false);
    });

    // Prevent clicks within panel from closing it
    this.panel.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  toggle(forceState = null) {
    this.isOpen = forceState !== null ? forceState : !this.isOpen;

    if (this.isOpen) {
      this.overlay.style.display = "block";
      this.panelContainer.style.display = "flex";
      // Small delay to ensure display change happens before animations
      requestAnimationFrame(() => {
        this.overlay.classList.add("show");
        this.panelContainer.classList.add("show");
        this.panel.classList.add("active");
      });
    } else {
      this.overlay.classList.remove("show");
      this.panelContainer.classList.remove("show");
      this.panel.classList.remove("active");
      // Wait for animations to finish before hiding elements
      setTimeout(() => {
        if (!this.isOpen) {
          // Check again in case state changed during timeout
          this.overlay.style.display = "none";
          this.panelContainer.style.display = "none";
        }
      }, 300); // Match this with your CSS transition duration
    }
  }
}
