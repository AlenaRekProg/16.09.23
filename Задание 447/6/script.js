let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId; 

let timerRunning = false; 

start.addEventListener('click', function () {
    if (!timerRunning) { 
        timerId = setInterval(function () {
            let date = new Date();
            console.log(date.getMinutes() + ' ' + date.getSeconds());
        }, 1000);
        timerRunning = true; 
    }
});

stop.addEventListener('click', function () {
    if (timerRunning) { 
        clearInterval(timerId); 
        timerRunning = false;
    }
});