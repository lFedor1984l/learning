function firstFunc(arr, fn) {
  let res = "Nev value: ";
  for (i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return res;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

function handler2(el) {
  return el * 10 + ' ';
}

function handler3(el) {
  return el.name + ' ' + 'is' + ' ' + el.age + ' ' + ',';
}

function handler4(el) {
	return el.revers
}

// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,”

console.log(firstFunc(["my", "name", "is", "Fedor"], handler1));
console.log(firstFunc([10, 20, 30], handler2));
console.log(firstFunc([{ age: 45, name: "Maks" }, { age: 20, name: "John" }], handler3));