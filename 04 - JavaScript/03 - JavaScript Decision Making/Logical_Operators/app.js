// =====================
// LOGICAL AND OPERATOR
// =====================

// And - both sides must be true to be true
true && true // true

1 <= 4 && 'a' === 'a'; // true
9 > 10 && 9 >= 9;  // false
'abc'.length === 3 && 1 + 1 === 4; // false


const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
} 

// Or - only one side needs to be true
true || false // true

1 !== 1 || 10 === 10 //true
10/2 === 5 || null //true
0 || undefined //false


// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}



