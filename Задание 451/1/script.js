let elem = document.querySelector('elem');;
if (elem) {
  elem.addEventListener('click', swapper, false);
}
elem.addEventListener('click', function() {
	setTimeout(function() {
		alert('Десять секунд прошли');
	}, 10000);
});