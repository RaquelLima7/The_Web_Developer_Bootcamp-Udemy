// npm init -y
// npm i express
// nodemon index.js
// npm i ejs

const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public'))) // to joing another files like css, js etc

app.set('view engine', 'ejs'); // don't need to require ejs just do it and tupe in the terminal npm i ejs
app.set('views', path.join(__dirname, '/views')) // taking a currently direct (__dirname)
// joing with that path with /views

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num }) // using { num } says that you want to acess this variavle num line 39 in ejs file
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})