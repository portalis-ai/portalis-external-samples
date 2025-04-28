# Avatar Embedding Templates - Instructional Guide

This guide explains how to add new templates to the Avatar Embedding Templates project.

## Steps to Add a New Template

### 1. Create a New Folder

- Navigate to the `templates` folder.
- Create a new folder following the naming syntax: `template-name-here`.

### 2. Add Required Files

- Inside the new folder, create the following files:
  - `index.html`
  - `script.js`
  - `styles.css`
  - Add other files as needed.
- Ensure to include `TODO:` comments alongside descriptions for each variable in your files. These `TODO:` comments are for clients to easily locate and edit variables when customizing the template.

### 3. Copy Code-Snippet-Templates

- Copy the contents of the `code-snippet-templates` folder into your new folder.
- Add your snippet-specific stylesheet and the styling for PrismJS into the main `index.html` file.

### 4. Follow Snippet Instructions

- Open the `snippet.html` file in the `code-snippet-templates` folder.
- Carefully review the comments and instructions in the file. Key steps include:

  1. **HTML Structure**:
     - Ensure the HTML structure in your `index.html` file matches the example provided in `snippet.html`.
     - Add `TODO:` comments for any variables or sections that clients may need to edit, such as titles, descriptions, or links.
     - Example:
       ```html
       <!-- TODO: Replace with your template's title -->
       <h1>Template Title</h1>
       ```
  2. **JavaScript Integration**:
     - In your `script.js`, add `TODO:` comments for any configurable variables or logic that clients may need to modify.
     - Example:
       ```javascript
       // TODO: Update the API endpoint for your template
       const apiEndpoint = "https://example.com/api";
       ```
  3. **Styling**:

     - Use the `styles.css` file to define your template's styles.
     - Add `TODO:` comments for any customizable styles, such as colors, fonts, or layout adjustments.
     - Use CSS custom properties (`var(--variable-name)`) for styling. Instantiate these variables in the `:root` selector for easy customization.
     - Example:

       ```css
       /* TODO: Define your template's custom properties */
       :root {
         --primary-color: #007bff; /* TODO: Update the primary color */
         --font-size: 16px; /* TODO: Update the font size */
       }

       .primary-button {
         background-color: var(--primary-color);
         font-size: var(--font-size);
       }
       ```

  4. **Code Snippets**:
     - Add code snippets to your template by following the example provided in `snippet.html`.
     - Use the `<pre>` and `<code>` tags for syntax highlighting, and ensure PrismJS is properly integrated.
     - Add `TODO:` comments for any snippet sections that clients may need to modify.
  5. **Customization**:
     - Modify the provided example code to suit your template's requirements.
     - Ensure all client-editable sections are clearly marked with `TODO:` comments.

### 5. Record a GIF

- Once your template is implemented, record a quick GIF of the template in action.
- Save the GIF in the `assets` folder with a descriptive name.

### 6. Update `script.js`

- Open the `script.js` file in the `avatar-embedding-templates` folder.
- Add your template details to the `templatesArr` array:
  - `gifPath`: Path to the GIF you recorded.
  - `text`: A brief description of the template.
  - `title`: The title of your template.
  - `url`: The folder name of your template.

Example:

```javascript
{
  gifPath: "assets/your-template-gif.gif",
  text: "A brief description of your template.",
  title: "Your Template Title",
  url: "template-name-here",
}
```

### 7. Test Your Template

- Open the project in a browser and verify that your template appears correctly in the list.

---

By following these steps, you can easily add new templates to the Avatar Embedding Templates project. Happy coding!
