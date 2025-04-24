function createAETCard(gifSrc, description, buttonText, buttonLink) {
  // Create the container div
  const avatarTemplate = document.createElement("div");
  avatarTemplate.className = "aet-card";

  // Create the title element
  const title = document.createElement("h2");
  title.className = "avatar-title";
  title.textContent = buttonText;
  // Create the GIF element
  const gif = document.createElement("img");
  gif.src = gifSrc;
  gif.alt = "Avatar GIF";
  gif.className = "avatar-gif";

  // Create the description element
  const desc = document.createElement("p");
  desc.className = "avatar-description";
  desc.textContent = description;

  // Create the button element
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.onclick = () => {
    window.location.href = `./templates/${buttonLink}`;
  };

  // Append elements to the container
  avatarTemplate.appendChild(title);
  avatarTemplate.appendChild(gif);
  avatarTemplate.appendChild(desc);
  avatarTemplate.appendChild(button);

  // Append the container to the body or a specific parent element
  //   document.body.appendChild(avatarTemplate);
  document.body
    .querySelector(".aet-card-container")
    .appendChild(avatarTemplate);
}

templatesArr = [
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

templatesArr
  .sort((a, b) => {
    if (a.title < b.title) return -1;
    else return 1;
  })
  .forEach((template) => {
    createAETCard(
      template.gifPath,
      template.text,
      template.title,
      template.url
    );
  });
