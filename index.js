document.addEventListener("DOMContentLoaded", () => {
    const welcomeAnimation = document.querySelector('.welcome-animation');
    setTimeout(() => {
        welcomeAnimation.style.display = 'none';
    }, 5000); // 5 seconds (2 seconds fade-in + 3 seconds display)
});
