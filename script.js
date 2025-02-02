const noButton = document.querySelector('.no-btn');
const body = document.querySelector('body');

// Function to create random "Yes" buttons
function createYesButton() {
    const yesButton = document.createElement('button');
    yesButton.innerText = 'Yes 💘';
    yesButton.classList.add('yes-flood');
    
    // Random positioning on the screen
    yesButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    yesButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    // Add button to the body
    body.appendChild(yesButton);
    
    // Click event on any "Yes" button to reveal the surprise
    yesButton.addEventListener('click', () => {
        alert('Yeiii I knew it!! 💖');
        window.location.reload();  // Reset the page for fun
    });
}

// Event listener for the "No" button
noButton.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {  // Create multiple "Yes" buttons
        createYesButton();
    }
});