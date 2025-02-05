# Floating Bubble Template

## Overview

This template features a floating button that opens a modal with an embedded chat or video. It is designed to provide an interactive and engaging way for users to interact with your AI assistant.

## How to Use

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Navigate to the Template Folder**: Go to the `floating-bubble` folder.
3. **Open the Files**: Open the HTML, CSS, and JS files in your preferred code editor.

## Customization

### Update Avatar Preview Video

In the `script.js` file, update the `avatarPreviewURL` variable with the URL of your avatar preview video.

```javascript
const avatarPreviewURL = "YOUR_AVATAR_PREVIEW_VIDEO_URL_HERE";
```

### Update Active Call Image

In the `script.js` file, update the `activeCallURL` variable with the URL of your active call image.

```javascript
const activeCallURL = "YOUR_ACTIVE_CALL_IMAGE_URL_HERE";
```

### Update Chat Iframe URL

In the `index.html` file, update the `src` attribute of the iframe with your Portalis AI chat URL.

```html
<iframe
  src="YOUR_PORTALIS_AI_CHAT_URL_HERE"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allow="camera;microphone;fullscreen;clipboard-write"
  referrerpolicy="origin"
  id="chat-iframe"
></iframe>
```

## Example Site

You can view an example site showcasing the templates [here](https://emmanuelahonle1.github.io/portalisAI-avatar-templates/).

## Contributions

We welcome contributions from the community. If you have a new template or improvements to existing ones, please submit a pull request.

Suggestions can also be made to our #integration-ideas in our [Portalis AI Community Discord](https://discord.gg/54f3uz99).

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
