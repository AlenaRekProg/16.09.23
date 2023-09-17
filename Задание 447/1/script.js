var initialValue = 100;
var currentValue = initialValue;
var timerId;

function updateValue() {
    console.log(currentValue);
    if (currentValue === 0) {
        clearInterval(timerId);
    } else {
        currentValue--;
    }
}

document.getElementById("startButton").addEventListener("click", function() {
    timerId = setInterval(updateValue, 1000);
});
document.getElementById("stopButton").addEventListener("click", function() {
    clearInterval(timerId);
});
if (currentValue === 0) {
    clearInterval(timerId);
}