let start = document.querySelector('start');
let stop  = document.querySelector('stop');

let timerId;
ley 

start.addEventListener('click', function() {
	setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});