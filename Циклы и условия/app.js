// Место для первой задачи
function firstTask() {
	for(i=5; i<=10; i++){
		console.log(i)
	}
}
firstTask();
// Место для второй задачи
function secondTask() {
	for(i=20; i>=10; i--) {
		if (i === 13) {
			break;
		}
		console.log(i)
	}
}
secondTask();

// Место для третьей задачи
function thirdTask() {
	for (i=2; i<=10; i++) {
		if(i % 2 == 0) {
			console.log(i);
		} else {
			continue
		}
  	}
}
thirdTask()

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	let i = 2;


   while (i <= 16) {
     if (i % 2 === 0) {
       i++;
       continue;
     } else {
       console.log(i);
     }
     i++;
   }
	
}
fourthTask();

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];
	for (i = 5; i <= 10; i++) {
		arrayOfNumbers.push(i)
	}
	return arrayOfNumbers;
}

fifthTask();
