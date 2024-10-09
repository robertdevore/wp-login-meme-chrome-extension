// content.js

// Define the new logo image URL, link URL, and replacement text
const newLogoUrl = 'https://pbs.twimg.com/media/GZGWzO8WoAAqPE3?format=jpg&name=medium';
const newLinkUrl = 'https://notmatt.press';
const newLinkText = 'Powered by NotMattPress';

// Function to replace the logo background image and modify the link
function replaceLogo() {
    const logoElement = document.querySelector("#login h1 a");

    if (logoElement) {
        // Update the background image and dimensions
        logoElement.style.backgroundImage = `url('${newLogoUrl}')`;
        logoElement.style.backgroundSize = '356px';
        logoElement.style.height = '240px';
        
        // Adjust the top positioning of the parent element
        const loginHeader = document.querySelector("#login h1");
        if (loginHeader) {
            loginHeader.style.top = '-232px';
        }
        
        // Update the link URL and text
        logoElement.href = newLinkUrl;
        logoElement.textContent = newLinkText;

        // Disconnect the observer once done
        observer.disconnect();
    }
}

// Set up a MutationObserver to watch for changes in the #login h1 element
const observer = new MutationObserver(replaceLogo);

// Start observing the document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Call replaceLogo in case the element is already loaded when the script runs
replaceLogo();
