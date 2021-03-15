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
