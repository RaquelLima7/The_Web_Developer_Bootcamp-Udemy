// clear console
clear()

// Numbers (just one type):
1;
-99;
0.345345;

// NaN is a numeric value that represents something that is not a number

    0/0 // but NaN is considered a number

// typeof to find a type of the object

typeof 4 // "number"
typeof 0/0 //"NaN"
typeof NaN // "number"


//Making variables with let:
let numberOfFriends = 1; // let => variable's name => value

// update a variable

let numberOfFriends = 2; // just set the variable with another value

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 5
numberOfFriends-- // will be 4, because -- subtract 1 - It's the same logic for ++

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

// var 
// It's oldest way to declared a variable


//Booleans - true or false values
true;
false;
let isHappy = true;

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

// you can use a letter, but not in beginning
let num1 = 1 // but not never => let 1num = 1