let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
        let i = 0;
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});