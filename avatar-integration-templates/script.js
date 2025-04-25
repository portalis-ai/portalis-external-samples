document.addEventListener("DOMContentLoaded", function () {
  // Template data - stored in one place for easy management
  const templatesArr = [
    {
      gifPath: "",
      text: "Avatar appears as a floating button in the corner of the screen. Upon clicking, it expands to show the avatar modal above the button. For mobile, the avatar modal appears as a full-screen overlay.",
      title: "Slide-In Assistant",
      url: "slide-in-assistant",
    },
    {
      gifPath: "",
      text: "Avatar window will strictly fit the screen dimensions for a mobile device. The avatar will be centered in the screen and will not be a floating button.",
      title: "Mobile Portrait Call",
      url: "mobile-portrait-call",
    },
    {
      gifPath: "",
      text: "Modal window will appear centered on the screen with a dark overlay hiding the background. ",
      title: "Centered Support Modal",
      url: "centered-support-modal",
    },
    {
      gifPath: "",
      text: "Default conference view of avatar with responsive dimensions dependent on device screen size.",
      title: "Default Conference View",
      url: "default-conference-view",
    },
  ];

  // Card container element
  const cardContainer = document.querySelector(".aet-card-container");

  // Create and append all template cards
  templatesArr
    .sort((a, b) => a.title.localeCompare(b.title))
    .forEach(createAndAppendCard);

  // Card creation function
  function createAndAppendCard(template) {
    // Create main card container
    const card = document.createElement("div");
    card.className = "aet-card";

    // Create card elements
    const title = createCardTitle(template.title);
    const gif = createCardGif(template.gifPath, template.title);
    const description = createCardDescription(template.text);
    const button = createCardButton(template.title, template.url);

    // Assemble card
    card.append(title, gif, description, button);

    // Add to document
    cardContainer.appendChild(card);
  }

  // Helper functions for card elements
  function createCardTitle(titleText) {
    const title = document.createElement("h2");
    title.className = "avatar-title";
    title.textContent = titleText;
    return title;
  }

  function createCardGif(src, alt) {
    const gif = document.createElement("img");
    gif.src = src || "assets/placeholder.gif";
    gif.alt = alt + " Preview";
    gif.className = "avatar-gif";
    return gif;
  }

  function createCardDescription(text) {
    const desc = document.createElement("p");
    desc.className = "avatar-description";
    desc.textContent = text;
    return desc;
  }

  function createCardButton(text, url) {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = () => (window.location.href = `./templates/${url}`);
    return button;
  }
});
