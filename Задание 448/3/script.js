var countdownInput = document.getElementById('countdown');

function startCountdown() {
    var currentValue = parseInt(countdownInput.value, 10); 

    if (!isNaN(currentValue) && currentValue > 0) {
        currentValue--;
        countdownInput.value = currentValue; 
    } else {
        clearInterval(timerId);
    }
}

var timerId = setInterval(startCountdown, 1000);