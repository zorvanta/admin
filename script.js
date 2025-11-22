window.onload = function() {
    // Initial time set to 5 seconds
    let timeLeft = 5;
    const timerDisplay = document.getElementById('timer-display');

    // Function to update the display
    function updateTimer() {
        timerDisplay.textContent = timeLeft;
    }

    // Function to handle the end of the countdown
    function endCountdown() {
        clearInterval(countdownInterval);
        timerDisplay.textContent = "!!";
        // You can add more actions here when the timer reaches zero
    }

    // Start the countdown interval
    const countdownInterval = setInterval(function() {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            endCountdown();
        }
    }, 1000); // 1000 milliseconds = 1 second
};
