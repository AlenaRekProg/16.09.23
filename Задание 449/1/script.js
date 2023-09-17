let elem = document.querySelector('#elem');


elem.addEventListener('click', function() {
    // Сохраняем ссылку на элемент elem в переменной self
    let self = this;

    // Используем переменную self внутри функции setInterval для доступа к элементу
    setInterval(function() {
        self.value = Number(self.value) + 1;
    }, 1000);
})