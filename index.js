// Get the button and the popup elements
const btn = document.getElementById('btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Function to show the popup
function showPopup() {
    popup.classList.add('show-popup');
}

// Function to close the popup
function closePopup() {
    popup.classList.remove('show-popup');
}

// Add event listener to the button to show the popup
btn.addEventListener('click', showPopup);

// Add event listener to the close button to close the popup
closeBtn.addEventListener('click', closePopup);

// Automatically show the popup after 3 seconds
setTimeout(showPopup, 3000);