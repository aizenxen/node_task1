const countdownElement = document.getElementById('countdown');
    const mainContentElement = document.querySelector('.container');
    let timeLeft = 5;

    function updateTimer() {
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownElement.style.display = 'none';
            mainContentElement.style.display = 'block';
        } else {
            timeLeft--;
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);