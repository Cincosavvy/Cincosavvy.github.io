const loadingScreen = document.getElementById('loading-screen');
const loadingText = document.getElementById('loading-text');
const loadingBarProgress = document.getElementById('loading-bar-progress');
const mainContent = document.getElementById('main-content');


let progress = 0;
const totalTime = 3000;

const interval = setInterval(() => {
    progress += 10;
    loadingBarProgress.style.width = `${progress}%`;
    if (progress >= 100) {
        clearInterval(interval);
        loadingText.textContent = "Loading Complete!";
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                document.body.style.overflow = 'auto';
            }, 1000);
        }, 500);
    }
}, totalTime / 10);