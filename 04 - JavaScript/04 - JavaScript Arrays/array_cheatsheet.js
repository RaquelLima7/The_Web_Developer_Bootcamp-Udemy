// Making an array:
let colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"
colors[0][1] // "e"

// They have a length:
colors.length; //3

// Modifying Arrays
colors[0] = "pink" // just set it equal to another color

// If you put in the index the numbering that is not close, it appears that the indexes are empty so many times.
colors[10] = "black"
["red", "orange", "yellow", empty × 7, "black"];

// Important array methods:
//push(value) - adds value to the END of an array
let movieLine = ["Tom", "Nancy"];
movieLine.push("Oliver"); // let movieLine = ["Tom", "Nancy", "Oliver"];

//pop() - removes and returns last value in array
movieLine.pop() // It does not pass anything inside (), as it will remove the last item from the array.
movieLine = ["Tom", "Nancy"]; // removes "Oliver"

//unshift(val) - adds value to START of an array
movieLine = ["Tom", "Nancy", "Oliver", "Eva"];
movieLine.unshift("Jerry", "Denis");
movieLine = ["Jerry", "Denis", "Tom", "Nancy", "Oliver", "Eva"];

//shift() - removes and returns first element in an array
movieLine = ["Tom", "Nancy", "Oliver", "Eva"];
movieLine.shift()  // It will remove the first item
movieLine = ["Nancy", "Oliver", "Eva"]; // removes "Tom"

// concat() - merge two or more arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); // ["a", "b", "c", "d", "e", "f"]

// includes() - method determines whether an array includes a certain value among its entries
const array1 = [1, 2, 3];

console.log(array1.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // expected output: true

console.log(pets.includes('at')); // expected output: false

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2)); // expected output: 4

console.log(beasts.indexOf('giraffe')); // expected output: -1


// reverse() - reverses an array, the first array element becomes the last, and the last array element becomes the first.
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed); // expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1); // expected output: "array1:" Array ["three", "two", "one"]


