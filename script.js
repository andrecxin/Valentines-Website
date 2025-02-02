window.onload = function () {
    const noButton = document.querySelector('.no-btn');
    const body = document.querySelector('body');
    const popupMessage = document.querySelector('#popup-message');

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
        
        // Click event on any "Yes" button to create heart explosion and show pop-up
        yesButton.addEventListener('click', (event) => {
            createHeartExplosion(event.clientX, event.clientY);
            showPopup();
        });
    }

    // Event listener for the "No" button
    noButton.addEventListener('click', () => {
        for (let i = 0; i < 10; i++) {  // Create multiple "Yes" buttons
            createYesButton();
        }
    });

    // Function to create heart explosion
    function createHeartExplosion(x, y) {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');

            // Random direction for the heart to explode
            const angle = (Math.PI * 2 * i) / 15;
            heart.style.setProperty('--x', Math.cos(angle));
            heart.style.setProperty('--y', Math.sin(angle));

            // Set the initial position of the heart near the button
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;

            // Add the heart to the body
            body.appendChild(heart);

            // Remove the heart after the animation ends
            setTimeout(() => heart.remove(), 1500);
        }
    }

    // Function to show the pop-up message
    function showPopup() {
        popupMessage.classList.add('show');

        // Hide the pop-up after 3 seconds
        setTimeout(() => {
            popupMessage.classList.remove('show');
        }, 3000);
    }
};
