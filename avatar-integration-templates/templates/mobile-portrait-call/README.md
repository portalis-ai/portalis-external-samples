# Phone Video Call Template

This template is used for integrating a phone video call feature into your application. It provides a simple and responsive layout for embedding a phone video call iframe.

## Usage

1. Copy the contents of the `index.html`, `styles.css`, and `script.js` files into your project.
2. Update the iframe `src` attribute with your specific phone video call URL.
3. Customize the styles in `styles.css` as needed to fit your application's design.

## Files

- `index.html`: The main HTML file that contains the structure of the phone video call template.
- `styles.css`: The CSS file that styles the phone video call template.
- `script.js`: The JavaScript file for any dynamic functionality (currently empty).

## Example

```html
<iframe
  src="YOUR_PHONE_VIDEO_CALL_URL"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allow="camera;microphone;fullscreen;clipboard-write"
  referrerpolicy="origin"
></iframe>
```

Replace `YOUR_PHONE_VIDEO_CALL_URL` with your actual phone video call URL.
