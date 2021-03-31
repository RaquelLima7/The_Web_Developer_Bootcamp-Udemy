const args = process.argv.slice(2); // we put slice to not get the 2 firts elements (node and greeter.js)
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

