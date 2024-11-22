// Handle displaying the greeting
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('n');
const festival = urlParams.get('f');
const message = urlParams.get('m');

const nameDisplay = document.getElementById('nameDisplay');
const festivalName = document.getElementById('festivalName');
const customMessage = document.getElementById('customMessage');

// Update greeting with URL parameters or defaults
nameDisplay.textContent = name || "Friend";
festivalName.textContent = festival || "Season's Greetings";
customMessage.textContent = message || "Wishing you all the joy and happiness of the season! 🎉✨";

document.getElementById('greetingSection').classList.add('active');

// Handle creating a custom link
const createLinkBtn = document.getElementById('createLinkBtn');
const createLinkSection = document.getElementById('createLinkSection');
const copyLinkBtn = document.getElementById('copyLinkBtn');

createLinkBtn.addEventListener('click', () => {
    document.getElementById('greetingSection').classList.remove('active');
    createLinkSection.classList.add('active');
});

document.getElementById('greetingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputName = document.getElementById('name').value.trim();
    const selectedFestival = document.getElementById('festival').value;
    const customText = document.getElementById('message').value.trim();

    if (inputName && customText) {
        const link = `${window.location.origin}${window.location.pathname}?n=${encodeURIComponent(inputName)}&f=${encodeURIComponent(selectedFestival)}&m=${encodeURIComponent(customText)}`;
        
        // Shortening the URL (This is a simple example; you can use an API like Bitly for better results)
        const shortenedLink = link.substring(0, 40) + "..."; // Example shortening
        
        document.getElementById('result').innerHTML = `
            Share this link: <a href="${link}" target="_blank">${shortenedLink}</a>
        `;
        
        // Show copy link button
        copyLinkBtn.classList.remove('hidden');
        
        // Handle copying link to clipboard
        copyLinkBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(link).then(() => {
                alert("Link copied to clipboard!");
            });
        });
    } else {
        document.getElementById('result').textContent = "Please fill out all fields.";
    }
});
