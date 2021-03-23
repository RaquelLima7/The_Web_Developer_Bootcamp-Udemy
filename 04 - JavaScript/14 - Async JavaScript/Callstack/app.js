const multiply = (x, y) => x * y;

//square calls multiply (that is a simple function)
const square = x => multiply(x, x);


//the isRightTriangle calls square 3 times
//the isRightTriangle waits square and square waits multiply, and when get it the number, 
//multiply is removed form call stack and square has a value and so on
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

//explain Debug in sources 