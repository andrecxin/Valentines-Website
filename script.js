document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent page jump
    const surpriseBox = document.querySelector("#surprise");
    
    surpriseBox.classList.remove("hidden");
    surpriseBox.style.opacity = "1";
    surpriseBox.style.transform = "scale(1)";
});
