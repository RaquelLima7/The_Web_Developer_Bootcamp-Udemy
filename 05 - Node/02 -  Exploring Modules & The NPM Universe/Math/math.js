const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;  // here says that square and PI can have access in another file 
exports.PI = PI;

// ========================= / module.exports says what you want to export in this file
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


