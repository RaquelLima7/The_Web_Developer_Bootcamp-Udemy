const fs = require('fs'); // we need to require fs to use and can run in terminal

const folderName = process.argv[2] || 'Project' 
// in this case we passed 2 to get the 3 elements 
//( node folder's name and the 3 is the name of folder we want to creat)
// || 'Project' is the default case we didn't passe nothing



//bellow we creat a folder with name we passed in line 3
// and inside of this folder we creat the files
// writeFileSync insert data into file or creat if it don't exist
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}