window.onload = function() {
    let progress = 0;
    const progressBar = document.querySelector('.loading-progress');
    const message = document.getElementById('message');
    const typingText = document.getElementById('typingText');

    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            typingText.classList.add('hidden');
            progressBar.parentElement.classList.add('hidden');
            message.classList.remove('hidden');
        }
    }, 50); // Adjust the speed by changing the interval duration
};