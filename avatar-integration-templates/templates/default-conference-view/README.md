# Video Call Template

This template is used for integrating a video call feature into your application. It provides a simple and responsive layout for embedding a video call iframe.

## Usage

1. Copy the contents of the `index.html`, `styles.css`, and `script.js` files into your project.
2. Update the iframe `src` attribute with your specific video call URL.
3. Customize the styles in `styles.css` as needed to fit your application's design.

## Files

- `index.html`: The main HTML file that contains the structure of the video call template.
- `styles.css`: The CSS file that styles the video call template.
- `script.js`: The JavaScript file for any dynamic functionality (currently empty).

## Example

```html
<iframe
  src="YOUR_VIDEO_CALL_URL"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allow="camera;microphone;fullscreen;clipboard-write"
  referrerpolicy="origin"
></iframe>
```

Replace `YOUR_VIDEO_CALL_URL` with your actual video call URL.
