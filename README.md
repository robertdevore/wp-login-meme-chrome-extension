# Change WordPress® Login Logo Extension

This Chrome extension replaces the default WordPress® login logo on `login.wordpress.org` with a custom image of your choice.

## How It Works

1. **manifest.json** - Defines the extension and its permissions. Specifies that `content.js` should run on the WordPress® login page.
2. **content.js** - This is the main script:
   - Waits for the page's content to load.
   - Selects the logo element using the CSS selector `#login h1 a`.
   - Replaces the background image with a custom image by updating the `backgroundImage` style property.
   - Sets the `backgroundSize` to `256px` to ensure it displays correctly.

## Installation

1. Clone or download this extension's files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right.
4. Click "Load unpacked" and select the folder with the extension files.
5. Visit `https://login.wordpress.org` to see the new logo!

## Notes

- This extension only works on `login.wordpress.org`.
- You can replace the image URL in `content.js` to change the image as needed.
