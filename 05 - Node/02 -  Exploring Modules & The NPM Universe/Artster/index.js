// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
// to create a file (package.json), type npm init in the terminal
// this file is very useful to know all dependencies is using in the projet

const figlet = require("figlet");
const colors = require("colors");
figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});
