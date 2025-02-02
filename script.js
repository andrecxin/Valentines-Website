window.onload = function () {
    const revealButton = document.querySelector('.yes-btn');
    const surpriseBox = document.querySelector('#surprise');

    revealButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent any unwanted behavior

        // Reveal the hidden surprise box
        surpriseBox.classList.remove('hidden');
        surpriseBox.style.opacity = "1";
        surpriseBox.style.transform = "scale(1)";
    });
};
