const numArr = [2, 32, 1234, 54, 323];

let value;
	value = numArr.length; //Показывает длинну массива
	value = Array.isArray(numArr); //Показвает массив это или нет
	value = numArr[2]; //Показвает что под номером индекса
	numArr[2] = 22; //Меняет элемент
	value = numArr.indexOf(323); //Показвает под каким индексом элемент
	value = numArr.push(100, 200); //Добавляет в конец массива
	value = numArr.pop(); //Удаляет эмент с конца массива
	value = numArr.unshift(44, 55, 77); //Добавляет элемент в начало массива
	value = numArr.shift(); //Убирает элемент с начала массива 
	value = numArr.slice(1, 4); //Вырезает часть массива (1- скакого элемента; 2-по какой элемент
	value = numArr.splice(1, 2); //Вырезает часть массива + может добавить новые элементы
	value = numArr.reverse(); //Переворачивает массив
	value = numArr.concat(numArr); //Конкатенирует массивы
	value = numArr.join(); //Превращает массив в строку 
	value = 'Hello, world'.split(' ') //Превращант строку в массив

console.log(value, numArr);