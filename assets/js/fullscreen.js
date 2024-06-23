document.addEventListener('DOMContentLoaded', (event) => {
    // Add a temporary overlay to capture the first user interaction
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '10';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.cursor = 'pointer';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        openFullscreen();
        document.body.removeChild(overlay); // Remove the overlay after entering full screen
    });

    function openFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    // Attempt to open fullscreen after a small delay (not recommended, but possible in certain scenarios)
    setTimeout(() => {
        openFullscreen();
    }, 500);
});
