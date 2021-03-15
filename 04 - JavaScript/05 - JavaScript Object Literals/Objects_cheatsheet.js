// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// Modifying Objects
const midterms = {danielle: 96, thomas:78}
midterms.thomas = 79 // midterms = {danielle: 96, thomas: 79}

// add another item
midterms.erza = 80 // midterms = {danielle: 96, thomas: 79, erza: 80}
