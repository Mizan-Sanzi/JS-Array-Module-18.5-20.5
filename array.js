// Array values can be both number or string

const numbers1 = [2, 4, 5, 7, 8, 9];
const name = ['Abul', 'Babul', 'Kabul', 'Sabul', 'Habul', 'Makbul'];
console.log(name[3]);
console.log(name.length);

// index of array

const newNumbers1 = [345, 456, 456, 543, 644, 678, 234, 975, 567];
console.log(newNumbers1[5]);

// Set or update of values of array
newNumbers1[3]=500;
console.log(newNumbers1);

var numbers = [3, 4, 5, 6, 7];
console.log(numbers);
numbers.push(23,24,25);
console.log(numbers);
numbers.pop();
console.log(numbers);
var newNumbers = [23, 45, 67, 89, 56, 57];
var add =numbers.concat(newNumbers);
console.log(add);